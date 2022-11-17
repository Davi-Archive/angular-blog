import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBigComponent } from './card-big/card-big.component';
import { CardSmallComponent } from './card-small/card-small.component';



@NgModule({
  declarations: [
    CardBigComponent,
    CardSmallComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardBigComponent,
    CardSmallComponent
  ]
})
export class CardModule { }
