import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplieraddComponent } from './supplieradd.component';

describe('SupplieraddComponent', () => {
  let component: SupplieraddComponent;
  let fixture: ComponentFixture<SupplieraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplieraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplieraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
