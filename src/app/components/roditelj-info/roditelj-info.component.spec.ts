import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljInfoComponent } from './roditelj-info.component';

describe('RoditeljInfoComponent', () => {
  let component: RoditeljInfoComponent;
  let fixture: ComponentFixture<RoditeljInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
