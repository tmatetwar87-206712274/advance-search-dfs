import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedtableComponent } from './updatedtable.component';

describe('UpdatedtableComponent', () => {
  let component: UpdatedtableComponent;
  let fixture: ComponentFixture<UpdatedtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
