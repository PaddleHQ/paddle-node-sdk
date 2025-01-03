interface CustomData {
  customData: unknown;
}

interface ObjectWithData {
  data: Record<string, unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTopLevelCustomDataCamel(input: any): input is CustomData {
  return 'customData' in input;
}

function isObject(input: unknown): boolean {
  return input != null && typeof input === 'object';
}

function snakeCase(input: string): string {
  return input
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\W]+/g, '_') // non-alpahnum or _
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decamelizeKeys(obj: any): ObjectWithData {
  if (
    !isObject(obj) ||
    obj instanceof Date ||
    obj instanceof RegExp ||
    typeof obj === 'boolean' ||
    typeof obj === 'function'
  ) {
    return obj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let output: any;
  let i = 0;
  let l = 0;

  if (Array.isArray(obj)) {
    output = [];
    for (l = obj.length; i < l; i++) {
      output.push(decamelizeKeys(obj[i]));
    }
  } else {
    output = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        output[snakeCase(key)] = decamelizeKeys(obj[key]);
      }
    }
  }
  return output;
}

export function convertToSnakeCase(input: unknown) {
  if (!input || !isObject(input)) {
    return input;
  }

  if (isTopLevelCustomDataCamel(input)) {
    // top level customData
    const { customData, ...rest } = input;
    const result = decamelizeKeys(rest);
    return { ...result, custom_data: customData };
  } else {
    // phew
    return decamelizeKeys(input);
  }
}
