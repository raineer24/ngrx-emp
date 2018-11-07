import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDropdownComponent } from './app-dropdown.component';

describe('AppDropdownComponent', () => {
  let component: AppDropdownComponent;
  let fixture: ComponentFixture<AppDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
