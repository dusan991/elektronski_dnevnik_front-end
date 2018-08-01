import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetAddComponent } from './predmet-add.component';

describe('PredmetAddComponent', () => {
  let component: PredmetAddComponent;
  let fixture: ComponentFixture<PredmetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
