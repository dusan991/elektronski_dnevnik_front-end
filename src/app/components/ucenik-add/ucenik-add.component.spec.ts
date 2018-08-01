import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikAddComponent } from './ucenik-add.component';

describe('UcenikAddComponent', () => {
  let component: UcenikAddComponent;
  let fixture: ComponentFixture<UcenikAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
