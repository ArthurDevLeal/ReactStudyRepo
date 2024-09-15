"use client";
function Page() {
	const indexedDB = window.indexedDB;
	const request = indexedDB.open("userDb", 1);
	request.onerror = (error) => {
		console.log(error);
	};
	request.onupgradeneeded = (event) => {
		const db = request.result;
		const store = db.createObjectStore("users", { keyPath: "id" });

		store.createIndex("name", "name", { unique: true });
		store.createIndex("email", "email", { unique: true });
		store.createIndex("ip", "ip", { unique: true });
	};
	request.onsuccess = (event) => {
		const db = request.result;
		const transaction = db.transaction("users", "readwrite");

		const store = transaction.objectStore("users");
		const nameIndex = store.index("name");
		const emailIndex = store.index("email");
		const ipIndex = store.index("ip");
		store.put({ id: 1, name: "John", email: "john@me.com", ip: "89.207.132.170" });
		store.put({ id: 2, name: "Arthur", email: "Arthur@me.com", ip: "822.207.132.170" });
		store.put({ id: 3, name: "Julius", email: "Julius@me.com", ip: "19.2111.1322.170" });
		store.put({ id: 4, name: "Petter", email: "Petter@me.com", ip: "39.207.112.5270" });
		const idQuery = store.get(2);
		const idQuery2 = store.get(1);
		idQuery.onsuccess = () => {
			console.log(idQuery.result);
		};
		idQuery2.onsuccess = () => {
			console.log(idQuery2.result);
		};
		transaction.oncomplete = (event) => {
			db.close();
		};
	};
	return <div></div>;
}
export default Page;
