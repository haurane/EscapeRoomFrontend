import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesListComponent } from './modules/stories/stories-list/stories-list.component';
import { RoomsComponent } from './modules/rooms/rooms/rooms.component';
import { LandingPageComponent } from './modules/landingpage/landingpage/landingpage.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'stories', component: StoriesListComponent },
  { path: 'room', component: RoomsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
