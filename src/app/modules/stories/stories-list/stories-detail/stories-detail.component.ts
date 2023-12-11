import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Story } from '../../../../shared/models/story.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrl: './stories-detail.component.css'
})
export class StoriesDetailComponent {

  @Input() story!: Story
  @Output() closeModalEmitter: EventEmitter<void> = new EventEmitter()

  constructor(private router: Router) { }

  closeModal() {
    console.log("close Detail")
    this.closeModalEmitter.emit();
  }

  startStory(id: number) {
    this.router.navigate(['/room'], { state: { roomId: id } })
  }

}
