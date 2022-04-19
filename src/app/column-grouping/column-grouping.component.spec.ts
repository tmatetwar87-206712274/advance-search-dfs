import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnGroupingComponent } from './column-grouping.component';

describe('ColumnGroupingComponent', () => {
  let component: ColumnGroupingComponent;
  let fixture: ComponentFixture<ColumnGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnGroupingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
