import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificGamerComponent } from './specific-gamer.component';

describe('SpecificGamerComponent', () => {
  let component: SpecificGamerComponent;
  let fixture: ComponentFixture<SpecificGamerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificGamerComponent]
    });
    fixture = TestBed.createComponent(SpecificGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
