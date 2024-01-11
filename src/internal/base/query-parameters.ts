import snakeCase from 'lodash/snakeCase';

export class QueryParameters<T> {
  constructor(private readonly queryParameters: T) {}
  public toQueryString(): string {
    const urlSearchParam = new URLSearchParams();
    for (const key in this.queryParameters) {
      const value = this.queryParameters[key];
      if (key && value) {
        urlSearchParam.append(snakeCase(key), `${value}`);
      }
    }
    return '?' + urlSearchParam.toString();
  }
}
