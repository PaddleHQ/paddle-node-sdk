/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IReportFiltersNotification } from '../../types';
import { type ReportFilterName, type ReportFilterOperator } from '../../../enums';

export class ReportFiltersNotification {
  public readonly name: ReportFilterName;
  public readonly operator: null | ReportFilterOperator;
  public readonly value: string[] | string;

  constructor(reportFiltersResponse: IReportFiltersNotification) {
    this.name = reportFiltersResponse.name;
    this.operator = reportFiltersResponse.operator ?? null;
    this.value = reportFiltersResponse.value;
  }
}