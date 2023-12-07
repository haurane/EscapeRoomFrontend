import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesCreateComponent } from './stories-create.component';

describe('StoriesCreateComponent', () => {
  let component: StoriesCreateComponent;
  let fixture: ComponentFixture<StoriesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoriesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
