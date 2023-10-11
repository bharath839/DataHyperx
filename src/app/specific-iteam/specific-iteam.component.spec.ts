import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificIteamComponent } from './specific-iteam.component';

describe('SpecificIteamComponent', () => {
  let component: SpecificIteamComponent;
  let fixture: ComponentFixture<SpecificIteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificIteamComponent]
    });
    fixture = TestBed.createComponent(SpecificIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
