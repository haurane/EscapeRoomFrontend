import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { MatButtonModule } from '@angular/material/button'
import { SharedModule } from '../../shared/shared.module';
import { MatCommonModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    //MatButtonModule
  ],
})
export class LandingpageModule { }
