import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Story } from '../../../../shared/models/story.model';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrl: './stories-detail.component.css'
})
export class StoriesDetailComponent implements OnInit {

  //@Input() story!: Story
  //@Output() closeModalEmitter: EventEmitter<void> = new EventEmitter()
  //startingRoomId: string = "";
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<StoriesDetailComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Story) { }

  ngOnInit() {
    //this.startingRoomId = this.story.startingRoomId;
  }

  closeModal() {
    console.log("close Detail")
    this.dialogRef.close() 
  }

  startStory() {
    this.dialogRef.close()
    this.router.navigate(['/room'], { state: { roomId: this.data.startingRoomId, intro: this.data.intro } })
  }

}
