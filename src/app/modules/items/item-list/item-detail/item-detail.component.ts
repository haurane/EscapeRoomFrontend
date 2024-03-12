import { Component, Input } from '@angular/core';
import { Item } from '../../../../shared/models/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {

  @Input() item!: Item;

}
