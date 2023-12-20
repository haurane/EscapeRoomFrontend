import { Component, Input } from '@angular/core';
import { StaticObject } from '../../../../shared/models/static-object.model';

@Component({
  selector: 'app-static-object-detail',
  templateUrl: './static-object-detail.component.html',
  styleUrl: './static-object-detail.component.css'
})
export class StaticObjectDetailComponent {
  @Input() object!: StaticObject;

}
