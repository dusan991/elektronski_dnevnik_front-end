import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljListComponent } from './roditelj-list.component';

describe('RoditeljListComponent', () => {
  let component: RoditeljListComponent;
  let fixture: ComponentFixture<RoditeljListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
