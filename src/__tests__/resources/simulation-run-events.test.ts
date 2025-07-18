/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ListSimulationRunEventsQueryParameters, SimulationRunEventsResource } from '../../resources/index.js';
import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  ListSimulationRunEventMockResponse,
  SimulationRunEventMock,
  SimulationRunEventMockResponse,
} from '../mocks/resources/simulation-run-events.mock.js';

const simulationId = 'ntfsim_123';
const simulationRunId = 'ntfsimrun_123';

describe('SimulationRunEventsResource', () => {
  test('should return a list of simulationRunEvents', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListSimulationRunEventMockResponse);

    const simulationRunEventsResource = new SimulationRunEventsResource(paddleInstance);
    const simulationRunEventCollection = simulationRunEventsResource.list(simulationId, simulationRunId);

    let simulationRunEvents = await simulationRunEventCollection.next();
    expect(paddleInstance.get).toHaveBeenCalledWith(`/simulations/${simulationId}/runs/${simulationRunId}/events?`);
    expect(simulationRunEvents.length).toBe(1);

    simulationRunEvents = await simulationRunEventCollection.next();
    expect(paddleInstance.get).toHaveBeenCalledWith(
      `/simulations/${simulationId}/runs/${simulationRunId}/events?after=1`,
    );
    expect(simulationRunEvents.length).toBe(1);
  });

  test('should accept query params and return a list of simulationRunEvents', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListSimulationRunEventMockResponse);
    const simulationRunEventsResource = new SimulationRunEventsResource(paddleInstance);
    const queryParams: ListSimulationRunEventsQueryParameters = {
      after: '2',
      id: ['1234'],
    };

    const simulationRunEventCollection = simulationRunEventsResource.list(simulationId, simulationRunId, queryParams);
    const simulationRunEvents = await simulationRunEventCollection.next();

    expect(paddleInstance.get).toHaveBeenCalledWith(
      `/simulations/${simulationId}/runs/${simulationRunId}/events?after=2&id=1234`,
    );
    expect(simulationRunEvents.length).toBe(1);
  });

  test('should return a single simulationRunEvent by ID', async () => {
    const simulationRunEventId = SimulationRunEventMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(SimulationRunEventMockResponse);

    const simulationRunEventsResource = new SimulationRunEventsResource(paddleInstance);
    const simulationRunEvent = await simulationRunEventsResource.get(
      simulationId,
      simulationRunId,
      simulationRunEventId,
    );

    expect(paddleInstance.get).toHaveBeenCalledWith(
      `/simulations/${simulationId}/runs/${simulationRunId}/events/${simulationRunEventId}`,
    );
    expect(simulationRunEvent).toBeDefined();
    expect(simulationRunEvent.id).toBe(simulationRunEventId);
  });

  test('should replay an existing simulationRunEvent', async () => {
    const simulationRunEventId = SimulationRunEventMock.id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.post = jest.fn().mockResolvedValue(SimulationRunEventMockResponse);

    const simulationRunEventsResource = new SimulationRunEventsResource(paddleInstance);
    const replayedSimulationRunEvent = await simulationRunEventsResource.replay(
      simulationId,
      simulationRunId,
      simulationRunEventId,
    );

    expect(paddleInstance.post).toHaveBeenCalledWith(
      `/simulations/${simulationId}/runs/${simulationRunId}/events/${simulationRunEventId}/replay`,
      undefined,
    );
    expect(replayedSimulationRunEvent).toBeDefined();
  });
});
