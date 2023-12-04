import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCreateComponent } from './object-create.component';

describe('ObjectCreateComponent', () => {
  let component: ObjectCreateComponent;
  let fixture: ComponentFixture<ObjectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
