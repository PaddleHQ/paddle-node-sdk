/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import {
  CreateSimulationRequestBody,
  UpdateSimulationRequestBody,
  SimulationsResource,
  ListSimulationQueryParameters,
} from '../../resources/index.js';
import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  SimulationMockResponse,
  SimulationMock,
  CreateSimulationMock,
  UpdateSimulationMock,
  ListSimulationMockResponse,
  CreateSimulationPartialMock,
  SimulationPartialMockResponse,
} from '../mocks/resources/simulations.mock.js';

describe('SimulationsResource', () => {
  test('should return a list of simulations', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListSimulationMockResponse);

    const simulationsResource = new SimulationsResource(paddleInstance);
    const simulationCollection = simulationsResource.list();

    let simulations = await simulationCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/simulations?');
    expect(simulations.length).toBe(1);

    simulations = await simulationCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/simulations?after=1');
    expect(simulations.length).toBe(1);
  });

  test('should accept query params and return a list of simulations', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListSimulationMockResponse);
    const simulationsResource = new SimulationsResource(paddleInstance);
    const queryParams: ListSimulationQueryParameters = {
      after: '2',
      id: ['1234'],
    };

    const simulationCollection = simulationsResource.list(queryParams);
    let simulations = await simulationCollection.next();

    expect(paddleInstance.get).toBeCalledWith('/simulations?after=2&id=1234');
    expect(simulations.length).toBe(1);
  });

  test('should return a single simulation by ID', async () => {
    const simulationId = SimulationMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(SimulationMockResponse);

    const simulationsResource = new SimulationsResource(paddleInstance);
    const simulation = await simulationsResource.get(simulationId);

    expect(paddleInstance.get).toBeCalledWith(`/simulations/${simulationId}`);
    expect(simulation).toBeDefined();
    expect(simulation.id).toBe(simulationId);
  });

  test('should accepts query params and return a single simulation by ID', async () => {
    const simulationId = SimulationMock.id;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.get = jest.fn().mockResolvedValue(SimulationMockResponse);
    const simulationsResource = new SimulationsResource(paddleInstance);

    const simulation = await simulationsResource.get(simulationId);

    expect(simulation).toBeDefined();
    expect(paddleInstance.get).toBeCalledWith(`/simulations/${simulationId}`);
    expect(simulation.id).toBe(simulationId);
  });

  test('should create a new simulation', async () => {
    const newSimulation: CreateSimulationRequestBody = CreateSimulationMock;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.post = jest.fn().mockResolvedValue(SimulationMockResponse);
    const simulationsResource = new SimulationsResource(paddleInstance);
    const createdSimulation = await simulationsResource.create(newSimulation);

    expect(paddleInstance.post).toBeCalledWith(`/simulations`, newSimulation);
    expect(createdSimulation).toBeDefined();
    expect(createdSimulation.id).toBeDefined();
    expect(createdSimulation.name).toBe(newSimulation.name);
  });

  test('should create a new simulation with a partial payload', async () => {
    const newSimulation: CreateSimulationRequestBody = CreateSimulationPartialMock;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.post = jest.fn().mockResolvedValue(SimulationPartialMockResponse);
    const simulationsResource = new SimulationsResource(paddleInstance);
    const createdSimulation = await simulationsResource.create(newSimulation);

    expect(paddleInstance.post).toBeCalledWith(`/simulations`, newSimulation);
    expect(createdSimulation).toBeDefined();
    expect(createdSimulation.id).toBeDefined();
    expect(createdSimulation.name).toBe(newSimulation.name);
  });

  test('should update an existing simulation', async () => {
    const simulationId = SimulationMock.id;
    const simulationToBeUpdated: UpdateSimulationRequestBody = UpdateSimulationMock;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(SimulationMockResponse);

    const simulationsResource = new SimulationsResource(paddleInstance);
    const updatedSimulation = await simulationsResource.update(simulationId, simulationToBeUpdated);

    expect(paddleInstance.patch).toBeCalledWith(`/simulations/${simulationId}`, simulationToBeUpdated);
    expect(updatedSimulation).toBeDefined();
  });
});
