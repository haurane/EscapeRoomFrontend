import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { StaticObject } from '../../../../shared/models/static-object.model';
import { Item } from '../../../../shared/models/item.model';
import { ApiService } from '../../../../shared/api.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-static-object-detail',
  templateUrl: './static-object-detail.component.html',
  styleUrl: './static-object-detail.component.css'
})
export class StaticObjectDetailComponent implements OnInit, OnChanges {
  //heldItems$: Observable<Item[]>;
  inventory$: Observable<Item[]>;
  object$: Observable<StaticObject>;
  @Input() uuid: string = ""
  loading$: Observable<boolean>;
  unlockError$: Observable<boolean> = of(false)
  unlockErrorMessage$: Observable<string>= of("")

  //tests
  heldItemsId$: Observable<String []> = of([])


  combinations: string[] = [];
  emptyItem: Item = { name: "", description: "", uuid: "" }
  unlockItems: Item[] = [];


  constructor(private apiService: ApiService, private store: Store) {
    //this.heldItems$ = this.store.select(fromStore.fromSelectors.getHeldItemsOfStaticObject(this.object.uuid));
    this.inventory$ = this.store.select(fromStore.fromSelectors.getInventory);
    this.object$ = this.store.select(fromStore.fromSelectors.getStaticObjectById(this.uuid));
    //this.heldItems$ = this.store.select(fromStore.fromSelectors.getHeldItemsOfStaticObject(this.uuid));
    this.loading$ = this.store.select(fromStore.fromSelectors.getLoading)
    this.unlockError$ = this.store.select(fromStore.fromSelectors.getUnlockErrorStatus)
    this.unlockErrorMessage$ = this.store.select(fromStore.fromSelectors.getUnlockErrorMessage)
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Change")
    console.log(changes)
    console.log(this.uuid)
    //this.heldItems$ = this.store.select(fromStore.fromSelectors.getHeldItemsOfStaticObject(this.uuid));
    this.object$ = this.store.select(fromStore.fromSelectors.getStaticObjectById(this.uuid));
    this.combinations = []
    this.unlockItems = []
  }

  unlockItem() {
    // Deep Copy array since reference fucks up when sent in Action
    const sendCombinations = [ ...this.combinations ];
    const sendItems = [ ...this.unlockItems ];
    console.log(sendCombinations);
    console.log(sendItems);
    this.store.dispatch(new fromStore.fromActions.UnlockStaticObject({ uuid: this.uuid, combination: sendCombinations, items: sendItems }));
  }

  addCombination() {
    this.combinations.push("");
  }

  removeCombination(index: number) {
    this.combinations.splice(index,1)
  }

  addItem() {
    this.unlockItems.push(this.emptyItem)
  }

  removeItem(index: number) {
    this.unlockItems.splice(index, 1)
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}
