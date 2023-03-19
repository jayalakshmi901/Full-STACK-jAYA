import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewalletComponent } from './updatewallet.component';

describe('UpdatewalletComponent', () => {
  let component: UpdatewalletComponent;
  let fixture: ComponentFixture<UpdatewalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatewalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatewalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
