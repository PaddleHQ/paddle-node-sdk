/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  CreateNotificationSettingsExpectation,
  CreateNotificationSettingsMock,
  ListNotificationSettingsMockResponse,
  NotificationSettingsMockResponse,
  UpdateNotificationSettingsExpectation,
  UpdateNotificationSettingsMock,
} from '../mocks/resources/notification-settings.mock.js';
import { NotificationSettingsResource } from '../../resources/index.js';
import { NotificationMock } from '../mocks/resources/notifications.mock.js';
import { convertToSnakeCase } from '../../internal/index.js';

describe('NotificationSettingsResource', () => {
  test('should return a list of notification settings', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListNotificationSettingsMockResponse);

    const notificationsResource = new NotificationSettingsResource(paddleInstance);
    const notifications = await notificationsResource.list();

    expect(paddleInstance.get).toBeCalledWith('/notification-settings');
    expect(notifications.length).toBe(1);
  });

  test('should return a single notification settings by ID', async () => {
    const notificationId = NotificationMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(NotificationSettingsMockResponse);

    const notificationsResource = new NotificationSettingsResource(paddleInstance);
    const notification = await notificationsResource.get(notificationId);

    expect(paddleInstance.get).toBeCalledWith(`/notification-settings/${notificationId}`);
    expect(notification).toBeDefined();
  });

  test('should create a new notification settings', async () => {
    const newNotificationSettings = CreateNotificationSettingsMock;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.post = jest.fn().mockResolvedValue(NotificationSettingsMockResponse);
    const notificationsResource = new NotificationSettingsResource(paddleInstance);
    const notificationSettings = await notificationsResource.create(newNotificationSettings);

    expect(paddleInstance.post).toBeCalledWith(`/notification-settings`, newNotificationSettings);
    expect(notificationSettings).toBeDefined();
    expect(notificationSettings.id).toBeDefined();
    expect(convertToSnakeCase(CreateNotificationSettingsMock)).toEqual(CreateNotificationSettingsExpectation);
  });

  test('should update an existing notification settings', async () => {
    const notificationSettingsId = 'ntfset_1234';
    const notificationSettingsBody = UpdateNotificationSettingsMock;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(NotificationSettingsMockResponse);

    const notificationsResource = new NotificationSettingsResource(paddleInstance);
    const notificationSettings = await notificationsResource.update(notificationSettingsId, notificationSettingsBody);

    expect(paddleInstance.patch).toBeCalledWith(
      `/notification-settings/${notificationSettingsId}`,
      notificationSettingsBody,
    );
    expect(notificationSettings).toBeDefined();

    expect(convertToSnakeCase(UpdateNotificationSettingsMock)).toEqual(UpdateNotificationSettingsExpectation);
  });

  test('should delete an existing notification settings', async () => {
    const notificationSettingsId = 'ntfset_1234';

    const paddleInstance = getPaddleTestClient();
    paddleInstance.delete = jest.fn().mockResolvedValue(NotificationSettingsMockResponse);

    const notificationsResource = new NotificationSettingsResource(paddleInstance);
    const notificationSettings = await notificationsResource.delete(notificationSettingsId);

    expect(paddleInstance.delete).toBeCalledWith(`/notification-settings/${notificationSettingsId}`);
    expect(notificationSettings).toBeUndefined();
  });
});
