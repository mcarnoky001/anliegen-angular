import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizedTasksClearkComponent } from './finalized-tasks-cleark.component';

describe('FinalizedTasksClearkComponent', () => {
  let component: FinalizedTasksClearkComponent;
  let fixture: ComponentFixture<FinalizedTasksClearkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizedTasksClearkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizedTasksClearkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
