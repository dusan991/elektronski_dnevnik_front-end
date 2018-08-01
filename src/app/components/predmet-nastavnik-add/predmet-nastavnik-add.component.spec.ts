import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetNastavnikAddComponent } from './predmet-nastavnik-add.component';

describe('PredmetNastavnikAddComponent', () => {
  let component: PredmetNastavnikAddComponent;
  let fixture: ComponentFixture<PredmetNastavnikAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetNastavnikAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetNastavnikAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
