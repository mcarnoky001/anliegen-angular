import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTaskComponent } from './selected-task.component';

describe('SelectedTaskComponent', () => {
  let component: SelectedTaskComponent;
  let fixture: ComponentFixture<SelectedTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
