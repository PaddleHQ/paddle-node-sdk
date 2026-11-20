function toCamelCase(str: string) {
  return str.toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function convertKeysToCamelCase(obj: object): object {
  // Handle null or primitive values
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamelCase);
  }

  // Handle objects
  const converted: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    // Convert the key to camelCase
    const camelCaseKey = toCamelCase(key);

    // Custom data is free-form, so its keys are returned as stored.
    converted[camelCaseKey] = key === 'custom_data' ? value : convertKeysToCamelCase(value);
  }

  return converted;
}
