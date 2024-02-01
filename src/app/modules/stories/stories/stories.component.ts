import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from '../../../shared/models/story.model'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements OnInit {
  @Input() story!: Story;
  @Output() selectedStory: EventEmitter<Story> = new EventEmitter();

  hover: boolean = false;

  ngOnInit() {
  }

  selectStory() {
    this.selectedStory.emit(this.story);
  }
}
