<template>
  <div class="flex items-center justify-center">
    <input
      type="text"
      placeholder="Enter your email address"
      class="border border-gray-400 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
    />
    <button
      @click="addRecord"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r-lg py-2 px-4"
    >
      Subscribe
    </button>
  </div>
</template>

<script setup>
try {
  const request = indexedDB.open("forms");
  let db;

  request.onupgradeneeded = function () {
    // The database did not previously exist, so create object stores and indexes.
    const db = request.result;
    const store = db.createObjectStore("applications_form", {
      keyPath: "isbn",
    });

    // Populate with initial data.
    store.put({
      name: "",
      surname: "",
      email: "",
      phone: "",
      passport_no: "",
      travel_on: "",
      price: 0,
      passport_doc: null,
      national_id: null,
      client_photo: null,
      country: "turkey",
      visa_type: "something",
      isbn: 0,
    });
  };

  request.onsuccess = function () {
    db = request.result;
    console.log(db);
  };
} catch (error) {
  console.log(error);
}
</script>
