import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEventEmitterComponent } from './product-event-emitter.component';

describe('ProductEventEmitterComponent', () => {
  let component: ProductEventEmitterComponent;
  let fixture: ComponentFixture<ProductEventEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEventEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
