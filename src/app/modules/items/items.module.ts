import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-list/item-detail/item-detail.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemsRoutingModule } from './items-routing.module';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCreateComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
