import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkpageComponent } from './linkpage.component';

describe('LinkpageComponent', () => {
  let component: LinkpageComponent;
  let fixture: ComponentFixture<LinkpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
