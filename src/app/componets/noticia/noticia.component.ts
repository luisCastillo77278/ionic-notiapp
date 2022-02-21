import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { Article } from 'src/app/interfaces/Headlines.interface';

// Plugins
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { FavoritesService } from 'src/app/services/favorites.service';

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
    private inAppBrowser: InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private favoriteService: FavoritesService
  ) { }

  openArticle(){

    if(this.platform.is('ios') || this.platform.is('android') ){
      const browser = this.inAppBrowser.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url);

  }

  async openMenu(){

    const articleInFavorite = this.favoriteService.articleInFavorite(this.article);

    const buttons: ActionSheetButton[] = [
      {// puede que esto se pueda comentar
        text: 'Share',
        icon: 'share-social-outline',
        id: 'share',
        handler: ()=>this.shareOptions()
      },
      {
        text: (articleInFavorite) ? 'Remove' : 'Favorite',
        icon: (articleInFavorite) ? 'heart' : 'heart-outline',
        id: 'favorite',
        handler: ()=>this.favoriteToggle()
      },
      {
        text: 'Calcel',
        icon: 'close',
        role: 'calcel'
      }
    ];

    // const shareBtn: ActionSheetButton = {
    //   text: 'Share',
    //   icon: 'share-social-outline',
    //   id: 'share',
    //   handler: ()=>this.shareOptions()
    // };

    // if( this.platform.is('cordova') ){
    //   buttons.unshift(shareBtn);
    // }

    const action = await this.actionSheetCtrl.create({
      header: 'Options',
      buttons
    });

    await action.present();
  }

  shareOptions(){
    console.log('click share');
    if( this.platform.is('cordova') ){
      this.socialSharing.share(
        this.article.title,
        this.article.source.name,
        null,
        this.article.url
      );
    }else{
      if(navigator.share){
        navigator.share({
          title: this.article.title,
          text: this.article.source.name,
          url: this.article.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }else{
        console.log('el navegador no soporta share');
      }
    }

  }

  favoriteToggle(){
    console.log('click favorite');
    this.favoriteService.saveRemoveArticle(this.article);
  }

}
