import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    MenuRightComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    MenuRightComponent
  ]
})
export class MenuModule { }
