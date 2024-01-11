export class PathParameters {
  constructor(
    private readonly url: string,
    private readonly pathParameters: Record<string, string>,
  ) {}

  public deriveUrl() {
    let updatedUrl = this.url;
    for (const key in this.pathParameters) {
      const value = this.pathParameters[key];
      if (key && value) {
        updatedUrl = updatedUrl.split(`{${key}}`).join(value.toString());
      }
    }
    return updatedUrl;
  }
}
