import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenRotaDirective } from './imagen-rota.directive';



@NgModule({
  declarations: [
    ImagenRotaDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagenRotaDirective
  ]
})
export class DirectivesModule { }
