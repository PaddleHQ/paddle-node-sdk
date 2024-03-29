/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */
import { type NotificationSettingsType } from '../../../enums';
import { type IEventName } from '../../../notifications';

export interface CreateNotificationSettingsRequestBody {
  description: string;
  destination: string;
  subscribedEvents: IEventName[];
  type: NotificationSettingsType;
  apiVersion?: number | null;
  includeSensitiveFields?: boolean | null;
}
