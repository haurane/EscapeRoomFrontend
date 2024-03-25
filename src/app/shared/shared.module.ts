import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class SharedModule { }
