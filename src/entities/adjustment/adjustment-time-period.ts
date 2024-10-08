/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IAdjustmentsTimePeriodResponse } from '../../types/index.js';

export class AdjustmentTimePeriod {
  public readonly startsAt: string;
  public readonly endsAt: string;

  constructor(adjustmentsTimePeriod: IAdjustmentsTimePeriodResponse) {
    this.startsAt = adjustmentsTimePeriod.starts_at;
    this.endsAt = adjustmentsTimePeriod.ends_at;
  }
}
