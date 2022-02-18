import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/Headlines.interface';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private favoriteService: FavoritesService
  ) {}

  get articles(): Article[]{
    return this.favoriteService.articlesService;
  }
}
