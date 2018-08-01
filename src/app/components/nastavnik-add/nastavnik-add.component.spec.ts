import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikAddComponent } from './nastavnik-add.component';

describe('NastavnikAddComponent', () => {
  let component: NastavnikAddComponent;
  let fixture: ComponentFixture<NastavnikAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
