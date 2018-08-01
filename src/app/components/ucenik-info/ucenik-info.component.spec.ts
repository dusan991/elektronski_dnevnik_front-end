import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikInfoComponent } from './ucenik-info.component';

describe('UcenikInfoComponent', () => {
  let component: UcenikInfoComponent;
  let fixture: ComponentFixture<UcenikInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
