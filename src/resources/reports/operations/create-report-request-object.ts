/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IReportFilters } from '../../../types';
import { type ReportType } from '../../../enums';

export interface CreateReportRequestBody {
  type: ReportType;
  filters?: IReportFilters[] | null;
}
