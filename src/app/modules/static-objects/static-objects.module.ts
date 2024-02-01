import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticObjectsRoutingModule } from './static-objects-routing.module';
import { StaticObjectDetailComponent } from './static-object-list/static-object-detail/static-object-detail.component';
import { StaticObjectListComponent } from './static-object-list/static-object-list.component';
import { StaticObjectsComponent } from './static-objects/static-objects.component';
import { StaticObjectCreateComponent } from './static-object-create/static-object-create.component';
import { ItemsModule } from '../items/items.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    StaticObjectCreateComponent,
    StaticObjectDetailComponent,
    StaticObjectListComponent,
    StaticObjectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    StaticObjectsRoutingModule,
    ItemsModule,
    SharedModule,
  ],
  exports: [
    StaticObjectDetailComponent,
    StaticObjectListComponent,
    //StaticObjectsComponent,
  ]
})
export class StaticObjectsModule { }
