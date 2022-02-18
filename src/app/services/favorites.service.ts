import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from '../interfaces/Headlines.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private storage: Storage | null = null;
  private articles: Article[] = [];

  constructor(
    private storageIonic: Storage
  ) {
    this.init();
  }

  get articlesService(): Article[]{
    return [...this.articles];
  }

  async init(){
    const storage = await this.storageIonic.create();
    this.storage = storage;
    this.loadingArticle();
  }

  public saveRemoveArticle( article: Article){

    const exist = this.articles.find( art => art.title === article.title);
    if( !exist ){
      this.articles = [article,...this.articles];
    }else{
      this.articles = this.articles.filter(art => art.title !== article.title);
    }

    this.storage.set('articles', this.articles);
  }

  async loadingArticle(){
    try {
      this.articles = await this.storage.get('articles') || [];
    } catch (error) {
      console.log(error);
    }
  }

  articleInFavorite(article: Article){
    return !!this.articles.find(art => art.title === article.title);
  }

}
