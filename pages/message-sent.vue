<template>
  <div class="flex flex-col items-center p-10">
    <i class="fas fa-check-circle text-green-500 fa-10x mb-5"></i>
    <h1 class="text-2xl font-bold">Your Message Sent Successfully!</h1>
    <p class="text-lg text-gray-600 mb-5">Thank you for your inquiring.</p>
    <router-link
      to="/"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go Home
    </router-link>
  </div>
</template>
<script setup>
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
clearDB();
</script>
