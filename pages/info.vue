<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-semibold text-center my-8">
      {{ $t("connect_with_us") }}
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mb-28"
    >
      <!-- Social Media Cards Go Here -->
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <nuxt-link to="/">
          <img
            src="/images/tour-o.svg"
            alt="Tourexpect.com"
            class="mx-auto mb-2 w-32"
          />
          <p class="text-center">Tourexpect.com</p>
        </nuxt-link>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="https://www.facebook.com/tourexpect.erbil/">
          <img
            src="/images/socialmedia/Facebook-logo.png"
            alt="Facebook"
            class="mx-auto mb-4"
          />
          <p class="text-center">Facebook</p>
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="https://www.instagram.com/tourexpect.erbil">
          <!-- <img
            src="/images/socialmedia/instagram_icon.webp"
            alt="Instagram"
            class="mx-auto w-24 mt-4 mb-4"
          /> -->
          <p class="text-center">Instagram</p>
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="https://www.tiktok.com/@tourexpect.erbil">
          <img
            src="/images/socialmedia/tiktok.png"
            alt="Tik Tok"
            class="mx-auto w-24 mt-4 mb-4"
          />
          <p class="text-center">Tik Tok</p>
        </a>
      </div>
      <!-- <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="/">
          <img
            src="/images/socialmedia/twitter-logo.png"
            alt="Twitter"
            class="mx-auto mb-6 w-28"
          />
          <p class="text-center">Twitter</p>
        </a>
      </div> -->
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="https://www.youtube.com/c/TourExpect">
          <img
            src="/images/socialmedia/youtube-logo.png"
            alt="Youtube"
            class="mx-auto mb-6 w-28"
          />
          <p class="text-center">Youtube</p>
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="https://www.linkedin.com/company/tourexpect">
          <img
            src="/images/socialmedia/linkedin.png"
            alt="LinkedIn"
            class="mx-auto m w-36"
          />
          <p class="text-center">LinkedIn</p>
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="https://tlg.pm/channels/34e0a723-2111-4736-b235-e12280de2ed2/">
          <!-- <img
            src="/images/socialmedia/telegram-logo.webp"
            alt="Telegram"
            class="mx-auto my-4 w-28"
          /> -->
          <p class="text-center">Telegram</p>
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a href="mailto:info@tourexpect.com">
          <!-- <img
            src="/images/socialmedia/mail.webp"
            alt="Email"
            class="mx-auto my-4 w-28"
          /> -->
          <p class="text-center">info@tourexpect.com</p>
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <a
          href="https://invite.viber.com/?g2=AQBKuKsUz3ZLmU9Puq6nP%2FLb7TV8EMKY6FV7XlQ8MTmx%2BYzBr%2FPVQAPlNwVBGQS0"
        >
          <img
            src="/images/socialmedia/viber.png"
            alt="Viber"
            class="mx-auto my-4 w-28"
          />
          <p class="text-center">Viber</p>
        </a>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <svg
          class="w-20 text-blue-600 my-8 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          ></path>
        </svg>
        <p class="text-center">0750 988 2000</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md w-60 h-60">
        <svg
          class="w-20 text-blue-600 my-8 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          ></path>
        </svg>
        <p class="text-center">0751 988 2000</p>
      </div>
      <!-- Repeat similar card structure for other social media platforms -->
    </div>
  </div>
</template>
