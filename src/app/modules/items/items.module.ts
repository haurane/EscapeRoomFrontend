import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-list/item-detail/item-detail.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemsRoutingModule } from './items-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCreateComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ],
  exports: [
    ItemsComponent,
    InventoryComponent
  ]
})
export class ItemsModule { }
