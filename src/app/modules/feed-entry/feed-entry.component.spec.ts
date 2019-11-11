import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedEntryComponent } from './feed-entry.component';

describe('FeedEntryComponent', () => {
  let component: FeedEntryComponent;
  let fixture: ComponentFixture<FeedEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
