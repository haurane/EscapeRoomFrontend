import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories/stories.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoriesDetailComponent } from './stories-list/stories-detail/stories-detail.component';
import { StoriesCreateComponent } from './stories-create/stories-create.component';
import { StoriesRoutingModule } from './stories-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    StoriesComponent,
    StoriesListComponent,
    StoriesDetailComponent,
    StoriesCreateComponent,
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    SharedModule,
  ],
  exports: [
    StoriesComponent,
    StoriesListComponent,
  ]
})
export class StoriesModule { }
