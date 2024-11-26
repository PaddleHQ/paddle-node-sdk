declare global {
  function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;

  interface ResponseInit {
    status?: number;
    statusText?: string;
    headers?: HeadersInit;
  }

  class Response {
    constructor(body?: BodyInit | null, init?: ResponseInit);

    readonly status: number;
    readonly statusText: string;
    readonly ok: boolean;
    readonly headers: Headers;
    readonly type: ResponseType;
    readonly url: string;

    json(): Promise<any>;
    text(): Promise<string>;
    blob(): Promise<Blob>;
    arrayBuffer(): Promise<ArrayBuffer>;
    formData(): Promise<FormData>;
  }

  interface ResponseConstructor {
    new (body?: BodyInit | null, init?: ResponseInit): Response;
    prototype: Response;
  }

  declare const Response: ResponseConstructor;
}

export {};
