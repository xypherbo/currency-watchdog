import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloComponent } from './trello.component';

describe('TrelloComponent', () => {
  let component: TrelloComponent;
  let fixture: ComponentFixture<TrelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
