import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Routes, RouterModule } from '@angular/router';
import { Component2Component } from './component2/component2.component';
import {SharedModule} from './../shared/shared-module';


const routes: Routes = [
{ path: 'component1', component: Component1Component },
{ path: 'component2', component: Component2Component }
];

@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class CustomersModule { }
