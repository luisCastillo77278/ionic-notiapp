import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces/Headlines.interface';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public articles: Article[] = [];

  constructor(
    private noticiaService: NoticiaService
  ) {}

  ngOnInit(): void{
    this.noticiaService.getTopHeadlines()
      .subscribe( articles => this.articles.push( ...articles ));
  }

  loadData(){
    this.noticiaService.getTopHeadlinesByCategorys('business', true)
      .subscribe( articles => {

        if(this.articles.length === articles.length){
          this.infiniteScroll.disabled = true;
          return;
        }

        this.articles = articles;
        this.infiniteScroll.complete();

      });
  }

}
