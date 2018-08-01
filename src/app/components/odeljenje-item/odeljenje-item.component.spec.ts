import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeItemComponent } from './odeljenje-item.component';

describe('OdeljenjeItemComponent', () => {
  let component: OdeljenjeItemComponent;
  let fixture: ComponentFixture<OdeljenjeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeljenjeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeljenjeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
