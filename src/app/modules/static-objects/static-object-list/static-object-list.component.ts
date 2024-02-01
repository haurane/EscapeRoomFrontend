import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { StaticObject } from '../../../shared/models/static-object.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store'
import { ModalService } from '../../../shared/modal.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-static-object-list',
  templateUrl: './static-object-list.component.html',
  styleUrl: './static-object-list.component.css'
})
export class StaticObjectListComponent implements OnInit {
  @Input() roomId: string = "";
  objectIds: string[] = []
  objects$: Observable<StaticObject[]>= of([]);
  @Output() inspectedObject: EventEmitter<StaticObject> = new EventEmitter();
  activeObject: StaticObject = {
    uuid: "", name: "", description: "", combination: [""], heldItems: [{ name: "", uuid: "" }], locked: false, requiredItems: [{ name: "", uuid:"" }]
  }

  constructor(private store: Store, private modalService: ModalService) {
  }

  ngOnInit() {
    this.store.select(fromStore.fromSelectors.getContainedStaticObjectsIds(this.roomId)).subscribe(ids => this.objectIds = ids);
    this.objects$ = this.store.select(fromStore.fromSelectors.getContainedStaticObjectsOfRoom(this.roomId));
  }


  inspectObject(object: StaticObject) {
    console.log(object)
    this.activeObject = object
    //this.store.dispatch(new fromStore.fromActions.SelectActiveObject(object));
    let itemsLoaded = false
    //this.store.select(fromStore.fromSelectors.getItemsOfObjectLoadedById(object.uuid)).subscribe(loaded => itemsLoaded = loaded)
    if (!itemsLoaded && !object.locked && object.heldItems?.length > 0) {
      this.store.dispatch(new fromStore.fromActions.LoadItemsOfObject(object.uuid))
    }
    this.modalService.open("StaticObjectModal")
  }
}
