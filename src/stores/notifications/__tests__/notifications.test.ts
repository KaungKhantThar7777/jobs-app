import {
  notificationsStore,
  Notification,
} from '../notifications';

const notification = {
  id: '123',
  title: 'Hello World',
  type: 'info',
  message: 'This is the message',
} as Notification;

describe('notifications store', () => {
  it('should shows and dismiss notifications', () => {
    expect(
      notificationsStore.getState().notifications.length
    ).toEqual(0);

    notificationsStore
      .getState()
      .showNotification(notification);

    expect(
      notificationsStore.getState().notifications
    ).toContainEqual(notification);

    notificationsStore
      .getState()
      .dismissNotification('123');

    expect(
      notificationsStore.getState().notifications
    ).not.toContainEqual(notification);
  });
});
