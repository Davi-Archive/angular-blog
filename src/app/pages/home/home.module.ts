import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    CardModule,
    SharedModule,
    MenuModule

  ]
})
export class HomeModule { }
