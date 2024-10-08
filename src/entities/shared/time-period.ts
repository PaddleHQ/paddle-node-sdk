/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type Interval } from '../../enums/index.js';
import { type ITimePeriod } from '../../types/index.js';

export class TimePeriod {
  public readonly interval: Interval;
  public readonly frequency: number;

  constructor(timePeriod: ITimePeriod) {
    this.interval = timePeriod.interval;
    this.frequency = timePeriod.frequency;
  }
}
