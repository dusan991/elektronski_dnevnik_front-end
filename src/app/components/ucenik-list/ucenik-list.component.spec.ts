import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikListComponent } from './ucenik-list.component';

describe('UcenikListComponent', () => {
  let component: UcenikListComponent;
  let fixture: ComponentFixture<UcenikListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
