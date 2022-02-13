import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('error') errorImagen(){
    this.elementRef.nativeElement.src = 'assets/error.png';
  }
}
