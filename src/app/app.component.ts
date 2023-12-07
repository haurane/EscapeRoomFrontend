import { Component } from '@angular/core';
import { ModalService } from './shared/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  constructor(protected popupService: ModalService) { }
}
