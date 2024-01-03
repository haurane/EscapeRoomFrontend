import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from '../../../../shared/models/story.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrl: './stories-detail.component.css'
})
export class StoriesDetailComponent implements OnInit {

  @Input() story!: Story
  @Output() closeModalEmitter: EventEmitter<void> = new EventEmitter()
  startingRoomId: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    this.startingRoomId = this.story.startingRoomId;
  }

  closeModal() {
    console.log("close Detail")
    this.closeModalEmitter.emit();
  }

  startStory() {
    console.log(this.startingRoomId);
    this.router.navigate(['/room'], { state: { roomId: this.startingRoomId } })
  }

}
