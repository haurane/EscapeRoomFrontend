import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticObjectsComponent } from './static-objects.component';

describe('StaticObjectsComponent', () => {
  let component: StaticObjectsComponent;
  let fixture: ComponentFixture<StaticObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticObjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
