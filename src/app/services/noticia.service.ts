import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Article, HeadLines, ArticlesByCategoryAndPages } from '../interfaces/Headlines.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { storedArticlesByCategory } from '../data/mock-news';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private articlesByCategoryAndPages: ArticlesByCategoryAndPages = storedArticlesByCategory;

  constructor(
    private http: HttpClient
  ) {}

  getTopHeadlines(): Observable<Article[]>{
    // const url = `https://newsapi.org/v2/&page=1`;
    // return this.topHeadLines('top-headlines?category=business')
    //   .pipe(
    //     map( ({articles}) => articles)
    //   );
    return this.getArticlesByCategory('business');
  }

  getTopHeadlinesByCategorys( category: string, loadMore: boolean ): Observable<Article[]>{

    return of(this.articlesByCategoryAndPages[category].articles);

    if(loadMore){
      return this.getArticlesByCategory(category);
    }

    if(this.articlesByCategoryAndPages[category]){
      return of(this.articlesByCategoryAndPages[category].articles);
    }

    return this.getArticlesByCategory(category);

  }

  private topHeadLines( endpoint: string ): Observable<HeadLines>{
    console.log('PETICION HTTP');
    return this.http.get<HeadLines>(`https://newsapi.org/v2/${endpoint}`, {
      params: {
        apiKey: environment.apiKey,
        country: 'mx'
      }
    });
  }

  private getArticlesByCategory( category: string ): Observable<Article[]>{

    if( !Object.keys( this.articlesByCategoryAndPages).includes(category) ) {
      this.articlesByCategoryAndPages[category] = {
        page: 0,
        articles: []
      };
    }

    const page = this.articlesByCategoryAndPages[category].page + 1;

    return this.topHeadLines(`top-headlines?category=${ category }&page=${page}`)
      .pipe(
        map(({articles})=>{

          if(articles.length === 0) {return this.articlesByCategoryAndPages[category].articles;}

          this.articlesByCategoryAndPages[category] = {
            page,
            articles: [...this.articlesByCategoryAndPages[category].articles, ...articles]
          };
          return this.articlesByCategoryAndPages[category].articles;
        })
      );

  }
}
