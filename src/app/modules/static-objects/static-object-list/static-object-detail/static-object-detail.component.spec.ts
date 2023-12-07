import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticObjectDetailComponent } from './static-object-detail.component';

describe('StaticObjectDetailComponent', () => {
  let component: StaticObjectDetailComponent;
  let fixture: ComponentFixture<StaticObjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticObjectDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
