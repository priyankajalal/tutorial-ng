import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSizePipe } from './../pipes/custom-pipe.pipe';



@NgModule({
  declarations: [CustomSizePipe],
  imports: [
    CommonModule
  ],
exports: [
CustomSizePipe
  ]
})
export class SharedModule { }
