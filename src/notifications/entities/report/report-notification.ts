/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ReportStatus, type ReportType } from '../../../enums/index.js';
import { ReportFiltersNotification } from './report-filters-notification.js';
import { type IReportNotificationResponse } from '../../types/index.js';

export class ReportNotification {
  public readonly id: string;
  public readonly status: ReportStatus;
  public readonly rows: number | null;
  public readonly type: ReportType;
  public readonly filters: ReportFiltersNotification[];
  public readonly expiresAt: string | null;
  public readonly createdAt: string;

  constructor(reportResponse: IReportNotificationResponse) {
    this.id = reportResponse.id;
    this.status = reportResponse.status;
    this.rows = reportResponse.rows ?? null;
    this.type = reportResponse.type;
    this.filters = reportResponse.filters?.map((filter) => new ReportFiltersNotification(filter));
    this.expiresAt = reportResponse.expires_at ?? null;
    this.createdAt = reportResponse.created_at;
  }
}
