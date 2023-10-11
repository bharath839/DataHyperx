import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersPageComponent } from './gamers-page.component';

describe('GamersPageComponent', () => {
  let component: GamersPageComponent;
  let fixture: ComponentFixture<GamersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamersPageComponent]
    });
    fixture = TestBed.createComponent(GamersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
