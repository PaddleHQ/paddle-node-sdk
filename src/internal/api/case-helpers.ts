import { isArray, isBoolean, isDate, isFunction, isObject, isRegExp, snakeCase } from 'lodash';

interface CustomData {
  customData: unknown;
}

interface ObjectWithData {
  data: Record<string, unknown>;
}

function isTopLevelCustomDataCamel(input: any): input is CustomData {
  return 'customData' in input;
}

function decamelizeKeys(obj: any): ObjectWithData {
  if (!isObject(obj) || isDate(obj) || isRegExp(obj) || isBoolean(obj) || isFunction(obj)) {
    return obj;
  }

  let output: any;
  let i = 0;
  let l = 0;

  if (isArray(obj)) {
    output = [];
    for (l = obj.length; i < l; i++) {
      output.push(decamelizeKeys(obj[i]));
    }
  } else {
    output = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        output[snakeCase(key)] = decamelizeKeys((obj as any)[key]);
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
