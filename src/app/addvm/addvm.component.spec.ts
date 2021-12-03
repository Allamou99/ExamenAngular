import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvmComponent } from './addvm.component';

describe('AddvmComponent', () => {
  let component: AddvmComponent;
  let fixture: ComponentFixture<AddvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
