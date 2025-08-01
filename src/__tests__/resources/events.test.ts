/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { getPaddleTestClient } from '../helpers/test-client.js';
import { ListEventMockResponse } from '../mocks/resources/events.mock.js';
import { EventsResource, ListEventsQueryParameters } from '../../resources/events/index.js';

describe('EventsResource', () => {
  test('should return a list of events', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListEventMockResponse);

    const eventsResource = new EventsResource(paddleInstance);
    const eventCollection = eventsResource.list();

    let events = await eventCollection.next();
    expect(paddleInstance.get).toHaveBeenCalledWith('/events?');
    expect(events.length).toBe(1);

    events = await eventCollection.next();
    expect(paddleInstance.get).toHaveBeenCalledWith('/events?after=1');
    expect(events.length).toBe(1);
  });

  test('should accept query params and return a list of events', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListEventMockResponse);
    const eventsResource = new EventsResource(paddleInstance);
    const queryParams: ListEventsQueryParameters = {
      after: '2',
      orderBy: 'id[ASC]',
    };

    const eventCollection = eventsResource.list(queryParams);
    const events = await eventCollection.next();

    expect(paddleInstance.get).toHaveBeenCalledWith('/events?after=2&order_by=id%5BASC%5D');
    expect(events.length).toBe(1);
  });
});
