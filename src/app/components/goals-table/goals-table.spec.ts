import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsTable } from './goals-table';

describe('GoalsTable', () => {
  let component: GoalsTable;
  let fixture: ComponentFixture<GoalsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
