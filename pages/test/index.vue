<template>
  <div class="py-20">
    <div class="flex items-center justify-center space-x-2">
      <button
        @click="addRecord"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        addRecord
      </button>
      <button
        @click="getRecord"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        getRecord
      </button>
      <button
        @click="clearDB"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        clearDB
      </button>
      <button
        @click="deleteRecord"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        deleteRecord
      </button>
      <button
        @click="saveCategory"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
    <input
      class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      id="passport_doc"
      max="1024"
      type="file"
      @change="onFileSelected($event, i, 'passport_doc')"
    />
  </div>
</template>

<script setup>
let form = reactive({});
let imagePreview = ref(null);
let file = reactive(null);

function onFileSelected(event, i, tag_id) {
  file = event.target.files[0];
  form.file = event.target.files[0];
}

const storeCategory = async (data) => {
  console.log(data);
  let fd = new FormData();
  fd.append("category", "flag");
  fd.append("name_en", "English Name");
  fd.append("name_ar", "Arabic Name");
  fd.append("file", data.file);
  try {
    let { data: application } = await useFetch(() => `post-test`, {
      baseURL: "http://127.0.0.1:8000/api",
      method: "POST",
      body: fd,
    });
  } catch (e) {
    if (e.response.status === 422) {
      console.log(e);
    }
  }
};

const saveCategory = async () => {
  // await storeCategory({ form: form, file });
  let fd = new FormData();
  fd.append("category", "flag");
  fd.append("name_en", "English Name");
  fd.append("name_ar", "Arabic Name");
  fd.append("file", form.file);
  try {
    let { data: application } = await useFetch(() => `post-test`, {
      baseURL: "http://127.0.0.1:8000/api",
      method: "POST",
      body: fd,
    });
  } catch (e) {
    if (e.response.status === 422) {
      console.log(e);
    }
  }
};
// ======================================
try {
  const request = indexedDB.open("forms");
  let db;

  request.onupgradeneeded = function () {
    // The database did not previously exist, so create object stores and indexes.
    const db = request.result;
    const store = db.createObjectStore("applications_form", {
      keyPath: "isbn",
    });
  };

  request.onsuccess = function () {
    db = request.result;
  };
} catch (error) {
  console.error(error);
}

const addRecord = async () => {
  try {
    // Let us open our database
    const request = indexedDB.open("forms", 1);

    request.onsuccess = (event) => {
      let db2 = request.result;
      db2
        .transaction("applications_form", "readwrite")
        .objectStore("applications_form")
        .add({
          name: "aabc",
          surname: "bbb",
          isbn: 3,
        });
    };
  } catch (error) {
    console.error(error);
  }
};
const getRecord = () => {
  try {
    // Let us open our database
    const request = indexedDB.open("forms", 1);

    request.onsuccess = (event) => {
      const db2 = event.target.result;
      console.log(
        db2
          .transaction("applications_form", "readwrite")
          .objectStore("applications_form")
      );
      const objectStore = db2
        .transaction("applications_form", "readwrite")
        .objectStore("applications_form")
        .get(4);
      objectStore.onsuccess = (event) => {
        console.log(objectStore.result);
      };
    };
  } catch (error) {
    console.error(error);
  }
};

const clearDB = () => {
  try {
    // Let us open our database
    const request = indexedDB.open("forms", 1);

    request.onsuccess = (event) => {
      const db2 = event.target.result;
      console.log(
        db2
          .transaction("applications_form", "readwrite")
          .objectStore("applications_form")
      );
      const objectStore = db2
        .transaction("applications_form", "readwrite")
        .objectStore("applications_form")
        .clear();
      objectStore.onsuccess = (event) => {
        console.log(objectStore.result);
      };
    };
  } catch (error) {
    console.error(error);
  }
};
const deleteRecord = () => {
  try {
    indexedDB.deleteDatabase("forms");
  } catch (error) {
    console.error(error);
  }
};
</script>
