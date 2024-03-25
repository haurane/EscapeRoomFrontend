import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from '../../../shared/models/story.model'
import { MatDialog } from '@angular/material/dialog';
import { StoriesDetailComponent } from '../stories-list/stories-detail/stories-detail.component';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent implements OnInit {
  @Input() story!: Story;
  @Output() selectedStory: EventEmitter<Story> = new EventEmitter();

  hover: boolean = false;

  constructor(public dialog: MatDialog){}

  ngOnInit() {
  }

  selectStory() {
    const dialogRef = this.dialog.open(StoriesDetailComponent, {
      data: this.story
    });

    //this.selectedStory.emit(this.story);
  }
}
