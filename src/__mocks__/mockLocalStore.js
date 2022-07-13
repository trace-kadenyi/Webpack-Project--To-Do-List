function mockStore () {
    let dataStore = {};

    return {
      setItem: (key, value) => {
        dataStore[key] = String(value) || '';
      },
      getItem: (key) => {
        return dataStore[key] || null;
      },
      removeItem: (key) => {
        delete dataStore[key];
      },
      get length() {
        return Object.keys(dataStore).length;
      },
    };
  }

  export default mockStore;