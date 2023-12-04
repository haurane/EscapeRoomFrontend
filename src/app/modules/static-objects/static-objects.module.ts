import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticObjectsComponent } from './static-objects/static-objects.component';
import { ObjectListComponent } from './object-list/object-list.component';
import { ObjectDetailComponent } from './object-list/object-detail/object-detail.component';
import { ObjectCreateComponent } from './object-create/object-create.component';
import { StaticObjectsRoutingModule } from './static-objects-routing.module';



@NgModule({
  declarations: [
    StaticObjectsComponent,
    ObjectListComponent,
    ObjectDetailComponent,
    ObjectCreateComponent
  ],
  imports: [
    CommonModule,
    StaticObjectsRoutingModule
  ]
})
export class StaticObjectsModule { }
