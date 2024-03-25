import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesModule } from './modules/stories/stories.module';
import { SharedModule } from './shared/shared.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { fromReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { RoomEffects, StaticObjectEffects, effects } from './store/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingpageModule } from './modules/landingpage/landingpage.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoriesModule,
    RoomsModule,
    LandingpageModule,
    SharedModule,
    StoreModule.forRoot(),
    StoreModule.forFeature("EscapeRoom", fromReducers.reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
