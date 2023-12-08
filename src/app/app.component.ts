import { Component } from '@angular/core';
import { ModalService } from './shared/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Escape Room Simulator';
  constructor(protected popupService: ModalService) { }
}
