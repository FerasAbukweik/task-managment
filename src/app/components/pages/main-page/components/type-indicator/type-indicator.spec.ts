import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIndicator } from './type-indicator';

describe('TypeIndicator', () => {
  let component: TypeIndicator;
  let fixture: ComponentFixture<TypeIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
