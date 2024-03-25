import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories/stories.component';
import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoriesDetailComponent } from './stories-list/stories-detail/stories-detail.component';
import { StoriesCreateComponent } from './stories-create/stories-create.component';
import { StoriesRoutingModule } from './stories-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'

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
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    StoriesComponent,
    StoriesListComponent,
  ]
})
export class StoriesModule { }
