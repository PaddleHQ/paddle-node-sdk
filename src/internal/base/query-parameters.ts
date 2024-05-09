import * as lodash from 'lodash';

export class QueryParameters<T> {
  constructor(private readonly queryParameters: T) {}
  public toQueryString(): string {
    const urlSearchParam = new URLSearchParams();
    for (const key in this.queryParameters) {
      const value = this.queryParameters[key];
      if (key && value) {
        urlSearchParam.append(lodash.snakeCase(key), `${value}`);
      }
    }
    return '?' + urlSearchParam.toString();
  }
}
