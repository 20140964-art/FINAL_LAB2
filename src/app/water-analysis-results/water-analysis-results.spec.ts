import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterAnalysisResults } from './water-analysis-results';

describe('WaterAnalysisResults', () => {
  let component: WaterAnalysisResults;
  let fixture: ComponentFixture<WaterAnalysisResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterAnalysisResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterAnalysisResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
