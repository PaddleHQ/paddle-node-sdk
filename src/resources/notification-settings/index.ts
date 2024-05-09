/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { BaseResource, PathParameters } from '../../internal/base/index.js';
import { NotificationSettings } from '../../entities/index.js';
import { type INotificationSettingsResponse } from '../../types/index.js';
import { type Response, type ErrorResponse } from '../../internal/index.js';
import {
  type CreateNotificationSettingsRequestBody,
  type UpdateNotificationSettingsRequestBody,
} from './operations/index.js';

const NotificationSettingsPaths = {
  list: '/notification-settings',
  create: '/notification-settings',
  get: '/notification-settings/{notification_setting_id}',
  update: '/notification-settings/{notification_setting_id}',
  delete: '/notification-settings/{notification_setting_id}',
} as const;

export * from './operations/index.js';

export class NotificationSettingsResource extends BaseResource {
  public async list(): Promise<NotificationSettings[]> {
    const response = await this.client.get<undefined, Response<INotificationSettingsResponse[]> | ErrorResponse>(
      NotificationSettingsPaths.list,
    );

    const data = this.handleResponse<INotificationSettingsResponse[]>(response);

    return data.map((notificationSetting) => new NotificationSettings(notificationSetting));
  }

  public async create(
    createNotificationSettings: CreateNotificationSettingsRequestBody,
  ): Promise<NotificationSettings> {
    const response = await this.client.post<
      CreateNotificationSettingsRequestBody,
      Response<INotificationSettingsResponse> | ErrorResponse
    >(NotificationSettingsPaths.create, createNotificationSettings);

    const data = this.handleResponse<INotificationSettingsResponse>(response);

    return new NotificationSettings(data);
  }

  public async get(notificationId: string): Promise<NotificationSettings> {
    const urlWithPathParams = new PathParameters(NotificationSettingsPaths.get, {
      notification_setting_id: notificationId,
    }).deriveUrl();

    const response = await this.client.get<undefined, Response<INotificationSettingsResponse> | ErrorResponse>(
      urlWithPathParams,
    );

    const data = this.handleResponse<INotificationSettingsResponse>(response);

    return new NotificationSettings(data);
  }

  public async update(
    notificationId: string,
    updateNotificationSettings: UpdateNotificationSettingsRequestBody,
  ): Promise<NotificationSettings> {
    const urlWithPathParams = new PathParameters(NotificationSettingsPaths.update, {
      notification_setting_id: notificationId,
    }).deriveUrl();

    const response = await this.client.patch<
      UpdateNotificationSettingsRequestBody,
      Response<INotificationSettingsResponse> | ErrorResponse
    >(urlWithPathParams, updateNotificationSettings);

    const data = this.handleResponse<INotificationSettingsResponse>(response);

    return new NotificationSettings(data);
  }

  public async delete(notificationId: string): Promise<undefined> {
    const urlWithPathParams = new PathParameters(NotificationSettingsPaths.update, {
      notification_setting_id: notificationId,
    }).deriveUrl();

    const response = await this.client.delete(urlWithPathParams);

    if (response) {
      this.handleResponse<undefined>(response);
    }
  }
}
