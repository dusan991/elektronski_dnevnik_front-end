import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetListComponent } from './predmet-list.component';

describe('PredmetListComponent', () => {
  let component: PredmetListComponent;
  let fixture: ComponentFixture<PredmetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
