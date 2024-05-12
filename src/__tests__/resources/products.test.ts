/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  CreateProductMock,
  ListProductMockResponse,
  ProductMock,
  ProductMockResponse,
  UpdateProductMock,
} from '../mocks/resources/products.mock.js';
import {
  CreateProductRequestBody,
  GetProductQueryParameters,
  ListProductQueryParameters,
  ProductsResource,
  UpdateProductRequestBody,
} from '../../resources/index.js';
import { QueryParameters } from '../../internal/base/index.js';

describe('ProductsResource', () => {
  test('should return a list of products', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListProductMockResponse);

    const productsResource = new ProductsResource(paddleInstance);
    const productCollection = productsResource.list();

    let products = await productCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/products?');
    expect(products.length).toBe(1);

    products = await productCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/products?after=1');
    expect(products.length).toBe(1);
  });

  test('should accept query params and return a list of products', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListProductMockResponse);
    const productsResource = new ProductsResource(paddleInstance);
    const queryParams: ListProductQueryParameters = {
      after: '2',
      id: ['1234'],
      include: ['price'],
    };

    const productCollection = productsResource.list(queryParams);
    let products = await productCollection.next();

    expect(paddleInstance.get).toBeCalledWith('/products?after=2&id=1234&include=price');
    expect(products.length).toBe(1);
  });

  test('should return a single product by ID', async () => {
    const productId = ProductMock.id;
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ProductMockResponse);

    const productsResource = new ProductsResource(paddleInstance);
    const product = await productsResource.get(productId);

    expect(paddleInstance.get).toBeCalledWith(`/products/${productId}`, { queryParams: undefined });
    expect(product).toBeDefined();
    expect(product.id).toBe(productId);
  });

  test('should accepts query params and return a single product by ID', async () => {
    const productId = ProductMock.id;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.get = jest.fn().mockResolvedValue(ProductMockResponse);
    const productsResource = new ProductsResource(paddleInstance);

    const queryParams: GetProductQueryParameters = {
      include: ['price'],
    };
    const product = await productsResource.get(productId, queryParams);

    expect(product).toBeDefined();
    expect(paddleInstance.get).toBeCalledWith(`/products/${productId}`, new QueryParameters(queryParams));
    expect(product.id).toBe(productId);
  });

  test('should create a new product', async () => {
    const newProduct: CreateProductRequestBody = CreateProductMock;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.post = jest.fn().mockResolvedValue(ProductMockResponse);
    const productsResource = new ProductsResource(paddleInstance);
    const createdProduct = await productsResource.create(newProduct);

    expect(paddleInstance.post).toBeCalledWith(`/products`, newProduct);
    expect(createdProduct).toBeDefined();
    expect(createdProduct.id).toBeDefined();
  });

  test('should update an existing product', async () => {
    const productId = ProductMock.id;
    const productToBeUpdated: UpdateProductRequestBody = UpdateProductMock;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(ProductMockResponse);

    const productsResource = new ProductsResource(paddleInstance);
    const updatedProduct = await productsResource.update(productId, productToBeUpdated);

    expect(paddleInstance.patch).toBeCalledWith(`/products/${productId}`, productToBeUpdated);
    expect(updatedProduct).toBeDefined();
  });

  test('should archive an existing product', async () => {
    const productId = ProductMock.id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.patch = jest.fn().mockResolvedValue(ProductMockResponse);

    const productsResource = new ProductsResource(paddleInstance);
    const updatedProduct = await productsResource.archive(productId);

    expect(paddleInstance.patch).toBeCalledWith(`/products/${productId}`, { status: 'archived' });
    expect(updatedProduct).toBeDefined();
  });
});
