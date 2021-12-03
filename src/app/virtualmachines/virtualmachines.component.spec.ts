import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualmachinesComponent } from './virtualmachines.component';

describe('VirtualmachinesComponent', () => {
  let component: VirtualmachinesComponent;
  let fixture: ComponentFixture<VirtualmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualmachinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
