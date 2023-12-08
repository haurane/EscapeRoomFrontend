import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {}),
  ],
  exports: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
