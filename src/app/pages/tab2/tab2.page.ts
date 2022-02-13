import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NoticiaService } from 'src/app/services/noticia.service';
import { Article } from '../../interfaces/Headlines.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  public segmentos: string[]  = ['business','entertainment','general','health','science','sports','technology'];
  public segmentoCategory = this.segmentos[0];
  public articles: Article[] = [];

  constructor(
    private notiService: NoticiaService
  ) {}

  ngOnInit(): void{
    this.notiService.getTopHeadlinesByCategorys(this.segmentoCategory, false)
      .subscribe( articles => this.articles = [ ...articles ] );
  }

  segmentChanged(event: Event){
    this.segmentoCategory = (event as CustomEvent).detail.value;
    // console.log(event.detail.value);
    this.notiService.getTopHeadlinesByCategorys(this.segmentoCategory, false)
    .subscribe( articles => this.articles = [...articles] );
  }

  loadData(){
    console.log('loading');
    this.notiService.getTopHeadlinesByCategorys(this.segmentoCategory, true)
    .subscribe( articles => {
      if(articles.length === this.articles.length){
        this.infiniteScroll.disabled = true;
        return;
      }
      this.articles = articles;
      this.infiniteScroll.complete();
    });
  }

}
