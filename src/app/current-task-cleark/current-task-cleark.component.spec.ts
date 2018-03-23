import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTaskClearkComponent } from './current-task-cleark.component';

describe('CurrentTaskClearkComponent', () => {
  let component: CurrentTaskClearkComponent;
  let fixture: ComponentFixture<CurrentTaskClearkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTaskClearkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTaskClearkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
