import { Component, OnInit } from '@angular/core';
import { Story } from '../../../shared/models/story.model';
import { ApiService } from '../../../shared/api.service';
import { ModalService } from '../../../shared/modal.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrl: './stories-list.component.css'
})
export class StoriesListComponent implements OnInit {


  constructor(private apiService: ApiService, private modalService: ModalService) {

  }

  stories: Story[] = []
  selectedStory?: Story;

  ngOnInit() {
    this.apiService.getStories().subscribe(stories => this.stories = stories)
  }

  openStoryModal(story?: Story) {
    console.log(story);
    this.selectedStory = story;
    this.modalService.open("storiesModal")
  }
}
