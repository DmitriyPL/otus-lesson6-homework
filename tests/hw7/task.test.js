const task = require('../../tasks/hw7/script');
const saveList = task.saveList;
// const readList = task.readList;
// const drawList = task.drawList;
// const submitHandler = task.submitHandler;

class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  }
  
global.localStorage = new LocalStorageMock;

describe("saveList", () => {
    it('is a function', () => {
        expect(saveList).toBeInstanceOf(Function);
    });
    it('save ["1", "2", "3", "4", "5"] in localstorage', () => {
        saveList("list", ["1", "2", "3", "4", "5"]);
        expect(localStorage.list).toEqual(["1", "2", "3", "4", "5"]);
    });
});