import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikListComponent } from './nastavnik-list.component';

describe('NastavnikListComponent', () => {
  let component: NastavnikListComponent;
  let fixture: ComponentFixture<NastavnikListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
