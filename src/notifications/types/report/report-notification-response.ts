/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IReportFiltersNotification } from '../index';
import { type ReportType, type ReportStatus } from '../../../enums';

export interface IReportNotificationResponse {
  id: string;
  status: ReportStatus;
  rows?: number | null;
  type: ReportType;
  filters: IReportFiltersNotification[];
  expires_at?: string | null;
  created_at: string;
}
