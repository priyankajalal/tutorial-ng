import { Directive,ElementRef, Renderer2,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  defaultColor= "red";

constructor(private element: ElementRef, private renderer: Renderer2) {
       this.mouseOverColor = element.nativeElement.getAttribute("color")
       renderer.setStyle(element.nativeElement, 'background', this.defaultColor);
    }

     @HostListener('mouseenter')
     onMouseEnter() {
        // set new color and font-size
       // this.renderer.setStyle(this.element.nativeElement, 'font-size',this.size);
        this.renderer.setStyle(this.element.nativeElement, 'background',this.mouseOverColor);
     }

// Listen to event of the client - mouseleave
    @HostListener('mouseleave') onMouseLeave() {
        // restore original color and font-size
        this.renderer.setStyle(this.element.nativeElement, 'background',this.defaultColor);
    }

}
