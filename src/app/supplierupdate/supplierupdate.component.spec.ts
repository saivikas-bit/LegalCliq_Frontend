import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierupdateComponent } from './supplierupdate.component';

describe('SupplierupdateComponent', () => {
  let component: SupplierupdateComponent;
  let fixture: ComponentFixture<SupplierupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
