export default localStorageAPI = {
  readLocalStorageData(key) {
    return localStorage.getItem(key);
  },

  createLocalStorageData(serializedData, key) {
    localStorage.setItem(key, serializedData);
  },

  serializeData(unSerializedData) {
    return JSON.stringify(data);
  },

  deserializeData(serializedData) {
    let deserializedData;

    try {
      deserializedData = JSON.parse(serializedData);
    } catch (err) {
      console.log('ERROR: ', err.message);
      console.log('ERROR CODE: ', err.code);
    }

    return deserializedData;
  },
};
