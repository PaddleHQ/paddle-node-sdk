/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ReportType } from '../../../enums/index.js';
import { type IReportFilters } from '../../../types/index.js';

export interface CreateReportRequestBody {
  type: ReportType;
  filters?: IReportFilters[] | null;
}
