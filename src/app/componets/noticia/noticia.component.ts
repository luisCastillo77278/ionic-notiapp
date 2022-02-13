import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Article } from 'src/app/interfaces/Headlines.interface';

// Plugins
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {

  @Input() article?: Article;
  @Input() index?: number;

  constructor(
    private platform: Platform,
    private inAppBrowser: InAppBrowser
  ) { }

  openArticle(){

    if(this.platform.is('ios') || this.platform.is('android') ){
      const browser = this.inAppBrowser.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url);

  }

}
