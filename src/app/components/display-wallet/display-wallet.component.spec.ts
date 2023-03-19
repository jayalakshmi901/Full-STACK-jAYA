import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWalletComponent } from './display-wallet.component';

describe('DisplayWalletComponent', () => {
  let component: DisplayWalletComponent;
  let fixture: ComponentFixture<DisplayWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
