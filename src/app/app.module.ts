import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectsComponent } from './modules/objects/objects/objects.component';
import { ObjectListComponent } from './modules/objects/object-list/object-list.component';
import { ObjectDetailComponent } from './modules/objects/object-list/object-detail/object-detail.component';
import { ObjectCreateComponent } from './modules/objects/object-create/object-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectsComponent,
    ObjectListComponent,
    ObjectDetailComponent,
    ObjectCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
