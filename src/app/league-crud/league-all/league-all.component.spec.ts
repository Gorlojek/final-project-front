import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAllComponent } from './league-all.component';

describe('LeagueAllComponent', () => {
  let component: LeagueAllComponent;
  let fixture: ComponentFixture<LeagueAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
