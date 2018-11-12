import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredContentComponent } from './filtered-content.component';

describe('FilteredContentComponent', () => {
  let component: FilteredContentComponent;
  let fixture: ComponentFixture<FilteredContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
