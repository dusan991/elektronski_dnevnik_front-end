import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeListComponent } from './odeljenje-list.component';

describe('OdeljenjeListComponent', () => {
  let component: OdeljenjeListComponent;
  let fixture: ComponentFixture<OdeljenjeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeljenjeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeljenjeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
