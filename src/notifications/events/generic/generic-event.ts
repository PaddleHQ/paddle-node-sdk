import { Event } from '../../../entities/events/event.js';
import { convertKeysToCamelCase } from '../../../internal/base/index.js';
import { type IEventsResponse } from '../../../types/index.js';

export class GenericEvent extends Event {
  public override readonly data: object;

  constructor(response: IEventsResponse<object>) {
    super(response);
    this.data = convertKeysToCamelCase(response.data);
  }
}
