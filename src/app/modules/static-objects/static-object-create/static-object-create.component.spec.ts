import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticObjectCreateComponent } from './static-object-create.component';

describe('StaticObjectCreateComponent', () => {
  let component: StaticObjectCreateComponent;
  let fixture: ComponentFixture<StaticObjectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticObjectCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticObjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
