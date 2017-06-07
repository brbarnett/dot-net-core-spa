import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesComponent } from './values.component';

describe('ValuesComponent', () => {
  let component: ValuesComponent;
  let fixture: ComponentFixture<ValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
