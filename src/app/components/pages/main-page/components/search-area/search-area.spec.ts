import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArea } from './search-area';

describe('SearchArea', () => {
  let component: SearchArea;
  let fixture: ComponentFixture<SearchArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
