import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticObjectListComponent } from './static-object-list.component';

describe('StaticObjectListComponent', () => {
  let component: StaticObjectListComponent;
  let fixture: ComponentFixture<StaticObjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticObjectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
