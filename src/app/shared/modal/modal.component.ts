import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id?: String;
  isOpen: Boolean = false;
  private element: any;

  constructor(private popupService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.popupService.add(this);

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'custom-modal') {
        this.close();
      }
    })
  }

  ngOnDestroy() {
    this.popupService.remove(this);
    this.element.remove();
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('custom-modal-open');
    this.isOpen = true;
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('custom-modal-open');
    this.isOpen = false;
  }

}
