import { Routes } from '@angular/router';
import { DailyServiceRecord } from './daily-service-record/daily-service-record';
import { RabiesCase } from './rabies-case/rabies-case';
import { WaterAnalysisResults } from './water-analysis-results/water-analysis-results';

export const routes: Routes = [
    {path: '', redirectTo: '/daily-service-record', pathMatch: 'full'},
    {path: 'daily-service-record', component: DailyServiceRecord},
    {path: 'rabies-case', component: RabiesCase},
    {path: 'water-analysis-results', component: WaterAnalysisResults},
];
