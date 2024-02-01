import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StaticObject } from '../../../shared/models/static-object.model';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-static-objects',
  templateUrl: './static-objects.component.html',
  styleUrl: './static-objects.component.css'
})
export class StaticObjectsComponent {

  hover: boolean = false
  @Input() object?: StaticObject;
  @Output() inspectedObject: EventEmitter<StaticObject> = new EventEmitter();

  inspectObject() {
    this.inspectedObject.emit(this.object);
  }

}
