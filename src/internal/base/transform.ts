function toCamelCase(str: string) {
  return str.toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function convertKeysToCamelCase(obj: object) {
  // Handle null or primitive values
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamelCase);
  }

  // Handle objects
  const converted = {};
  for (const [key, value] of Object.entries(obj)) {
    // Convert the key to camelCase
    const camelCaseKey = toCamelCase(key);

    // Recursively convert nested objects and arrays
    converted[camelCaseKey] = convertKeysToCamelCase(value);
  }

  return converted;
}
