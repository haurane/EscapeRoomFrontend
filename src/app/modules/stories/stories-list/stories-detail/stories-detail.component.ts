import { Component, Input } from '@angular/core';
import { Story } from '../../../../shared/models/story.model';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrl: './stories-detail.component.css'
})
export class StoriesDetailComponent {

  @Input() story!: Story

}
