import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljAddComponent } from './roditelj-add.component';

describe('RoditeljAddComponent', () => {
  let component: RoditeljAddComponent;
  let fixture: ComponentFixture<RoditeljAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
