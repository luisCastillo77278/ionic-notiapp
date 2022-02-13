import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DirectivesModule
  ],
  exports: [
    NoticiasComponent
  ]
})
export class ComponentModule { }
