import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/card/card.module';
import { LayoutModule } from './components/layout/layout.module';
import { MenuModule } from './components/menu/menu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    LayoutModule,
    MenuModule
  ]
})
export class SharedModule { }
