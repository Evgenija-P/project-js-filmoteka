export function readLocalStorageData(key) {
  return localStorage.getItem(key);
}

export function createLocalStorageData(serializedData, key) {
  localStorage.setItem(key, serializedData);
}

export function serializeData(unSerializedData) {
  return JSON.stringify(data);
}

export function deserializeData(serializedData) {
  let deserializedData;

  try {
    deserializedData = JSON.parse(serializedData);
  } catch (err) {}

  return deserializedData;
}
