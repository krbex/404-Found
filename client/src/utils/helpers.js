export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("Game Gods", 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore("games", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };

    request.onerror = function (e) {
      console.log("There was an error");
    };

    request.onsuccess = function (e) {
      db = request.result;
      console.log(db);
      tx = db.transaction(storeName, "readwrite");
      store = tx.objectStore(storeName);
      console.log(store)

      db.onerror = function (e) {
        console.log("error", e);
      };

      switch (method) {
        case "put":
          console.log(object)
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          console.log(all)
          all.onsuccess = function () {
            resolve(all.result);
          };
          
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No valid method");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}

console.log("hello world");
