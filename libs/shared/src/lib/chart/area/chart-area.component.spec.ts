import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAreaComponent } from './chart-area.component';

describe('HeaderComponent', () => {
  let component: ChartAreaComponent;
  let fixture: ComponentFixture<ChartAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
