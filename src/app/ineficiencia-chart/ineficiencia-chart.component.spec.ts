import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IneficienciaChartComponent } from './ineficiencia-chart.component';

describe('IneficienciaChartComponent', () => {
  let component: IneficienciaChartComponent;
  let fixture: ComponentFixture<IneficienciaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IneficienciaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IneficienciaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
