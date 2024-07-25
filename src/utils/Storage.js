class Storage {
  lastInsertId = null;
  localStorageKey = null;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
  }

  async getAll() {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  async saveData(data) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(this.localStorageKey, jsonData);
  }

  async insert(insertData) {
    const id =
      insertData.id ||
      Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

    insertData.id = id;
    this.lastInsertId = id;

    const currentData = await this.getAll();
    currentData.push(insertData);

    this.saveData(currentData);
    insertData.id = null;
    return currentData;
  }

  async update(query, updateData) {
    const data = await this.getAll();

    data.forEach((item) => {
      if (Object.keys(query).every((key) => item[key] === query[key])) {
        Object.keys(updateData).forEach((key) => {
          item[key] = updateData[key];
        });
      }
    });

    this.saveData(data);

    return data;
  }
}

export default Storage;
