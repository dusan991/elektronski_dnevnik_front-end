import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikInfoComponent } from './nastavnik-info.component';

describe('NastavnikInfoComponent', () => {
  let component: NastavnikInfoComponent;
  let fixture: ComponentFixture<NastavnikInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
