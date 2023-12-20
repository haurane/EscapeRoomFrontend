import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StaticObject } from '../../../shared/models/static-object.model';

@Component({
  selector: 'app-static-object-list',
  templateUrl: './static-object-list.component.html',
  styleUrl: './static-object-list.component.css'
})
export class StaticObjectListComponent {
  @Input() objects?: StaticObject[];
  @Output() inspectedObject: EventEmitter<StaticObject> = new EventEmitter();

  inspectObject(object: StaticObject) {
    this.inspectedObject.emit(object)
  }
}
