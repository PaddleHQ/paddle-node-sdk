/** We cannot use lodash to convert camelCase to snake_case because it will remove special characters and convert all text to lowercase.
 * We have date fields in the format `updatedAt[GTE]` and we need to convert them to `updated_at[GTE]`.
 */
function convertCamelCaseToSnakeCase(input: string) {
  return input.replace(/\b(\w+)([A-Z][a-z])/g, (_match: string, p1, p2) => {
    return p1.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase() + '_' + p2.toLowerCase();
  });
}

function isValidValue<T>(value: T[Extract<keyof T, string>]) {
  return value !== undefined && value !== null && value !== '';
}

export class QueryParameters<T> {
  constructor(private readonly queryParameters: T) {}
  public toQueryString(): string {
    const urlSearchParam = new URLSearchParams();
    for (const key in this.queryParameters) {
      const value = this.queryParameters[key];
      if (key && isValidValue<T>(value)) {
        urlSearchParam.append(convertCamelCaseToSnakeCase(key), `${value}`);
      }
    }
    return '?' + urlSearchParam.toString();
  }
}
