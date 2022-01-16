import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierdeatilsComponent } from './supplierdeatils.component';

describe('SupplierdeatilsComponent', () => {
  let component: SupplierdeatilsComponent;
  let fixture: ComponentFixture<SupplierdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierdeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
