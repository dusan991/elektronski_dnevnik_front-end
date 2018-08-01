import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeAddComponent } from './odeljenje-add.component';

describe('OdeljenjeAddComponent', () => {
  let component: OdeljenjeAddComponent;
  let fixture: ComponentFixture<OdeljenjeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeljenjeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeljenjeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
