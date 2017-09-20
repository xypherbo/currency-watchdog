import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotcurrencyComponent } from './botcurrency.component';

describe('BotcurrencyComponent', () => {
  let component: BotcurrencyComponent;
  let fixture: ComponentFixture<BotcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
