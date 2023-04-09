<template>
  <div>
    <div
      v-show="locale == 'en'"
      class="px-8 sm:px-12 xl:px-0 w-full max-w-3xl mx-auto py-8"
    >
      <h1 class="text-3xl font-bold mb-4 text-gray-900">Who are We?</h1>

      <p class="mb-8 text-gray-700">
        Tourexpect Travel and Tourism is a leading provider of first-class
        tourism services at the highest levels in terms of programs, activities,
        and tours. Our extensive experience and our dealings with the most
        important and best companies, tourism agents, and tourist facilities
        around the world are what distinguish us from other companies. Your
        safety and comfort are one of our first concerns and the most important
        reason for choosing us as the best tourism agent around the world. We
        make our customers' dreams come true.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-gray-900">
        Why Choose Tourexpect Company?
      </h2>
      <p class="mb-4 text-gray-700">
        We have extensive experience in the tourism market and always prioritize
        the comfort and safety of our valued customers. Our aim is to provide
        comprehensive guidance and support to ensure safe and enjoyable trips
        for all our customers, as they explore the world's tourist attractions
        in various Turkish and Arab cities.
      </p>
      <p class="mb-4 text-gray-700">
        We offer a range of services before, during, and after travel, and
        maintain constant communication with our customers wherever they may be.
        We pride ourselves on providing a warm welcome and farewell at the
        airport, as well as the pleasant company with tour guides who speak
        multiple languages for easy communication during tours.
      </p>
      <p class="mb-8 text-gray-700">
        Our website also offers free travel tips and advice for those who love
        to travel, as well as airline tickets to destinations around the world,
        hotel and resort reservations, and group trips with special offers. We
        strive to provide diverse tourism programs, luxury transportation, car
        rentals, and furnished hotel apartments at the best prices. Our passion
        for travel and exploring new destinations knows no bounds.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-gray-900">Our Team:</h2>
      <p class="mb-8 text-gray-700">
        We have a full team of professionals and experts who specialize in
        providing exceptional entertainment and tourism services. Our team
        includes professionals from diverse backgrounds and nationalities, and
        we operate in accordance with labor laws in all countries. We work
        exclusively with the best companies in the tourism industry to ensure
        the highest quality service.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-gray-900">Our Services:</h2>
      <p class="mb-8 text-gray-700">
        Every customer who books with us receives a unique and unforgettable
        experience, complete with the best offers we have available. We offer
        both pre-made packages and customized packages tailored to our
        customer’s requests and travel dates. We specialize in providing the
        best deals for newlyweds, taking care of even the smallest details to
        make their honeymoon truly special.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-gray-900">
        Our services include:
      </h2>
      <ul class="mb-8 text-gray-700 list-disc">
        <li class="mb-2">
          Reservation of international and domestic airline tickets to
          destinations around the world, with options for all classes and the
          best available prices and features.
        </li>
        <li class="mb-2">
          Booking comfortable accommodations in carefully selected hotels,
          resorts, islands, furnished apartments, and villas with various star
          ratings.
        </li>
        <li class="mb-2">
          Airport reception and farewell services with the latest luxury cars
          and tourist vans.
        </li>
        <li class="mb-2">
          Special programs and tours designed to enhance your travel experience.
        </li>
        <li class="mb-2">
          Optional tourist activities available upon request, with professional
          tour guides fluent in multiple languages.
        </li>
        <li class="mb-2">Incredible honeymoon packages.</li>
        <li class="mb-2">
          Assistance with visa applications for various countries.
        </li>
      </ul>
    </div>

    <div
      v-show="locale == 'ar'"
      dir="rtl"
      class="px-8 sm:px-12 xl:px-0 w-full max-w-3xl mx-auto py-8"
    >
      <h1 class="text-3xl font-bold mb-4 text-gray-900">من نحن؟</h1>

      <p class="mb-4 text-gray-700">
        شركة توراكسبكت للسياحة والسفر الرائدة في مجال توفير الخدمات السياحية من
        الدرجة الأولى وعلى أعلى المستويات من حيث البرامج والأنشطة والجولات
        السياحية .
      </p>
      <p class="mb-4 text-gray-700">
        خبرتنا الواسعة وتعاملنا مع أهم وأفضل الشركات ووكلاء السياحة والمنشآت
        السياحية حول العالم هو ما يميزنا عن غيرنا من الشركات.
      </p>
      <p class="mb-4 text-gray-700">
        إن سلامتكم وراحتكم هي من أولى إهتماماتنا وهي السبب الأهم لإختيارنا كأفضل
        وكلاء السياحة حول العالم.
      </p>
      <p class="mb-8 text-gray-700">نحن نجعل أحلام عملائنا إلى حقيقة.</p>
      <h2 class="text-2xl font-bold mb-4 text-gray-900">
        لماذا شركة تور اكسبكت السياحية؟
      </h2>
      <p class="mb-4 text-gray-700">
        نملك خبرة ممتازة على مدار سنوات في السوق السياحي، نهتم دائماً براحة
        عملائنا الكرام، ونهدف لتقديم سبل الراحة والسلامة التامة والإرشادات
        اللازمة لكل عملائنا الكرام لجعل رحلتهم آمنة معنا، ولإستكشاف المعالم
        السياحية في كل بلدان العالم .
      </p>
      <p class="mb-4 text-gray-700">
        نقدم خدماتنا قبل السفر وأثناءه وبعده، ونبقى على تواصل تام مع عملائنا
        أينما كانوا، نتميز بإستقبال وتوديع لائق من وإلى المطار، صحبة لطيفة بوجود
        مرشدين سياحيين يتقنون عدة لغات لسهولة التواصل مع عملائنا خلال جولاتهم
        السياحية.
      </p>
      <p class="mb-4 text-gray-700">
        كما نقدم في موقعنا نصائح وإرشادات مجانية لعشاق السفرات الممتعة ونوفر
        تذاكر الطيران لكل دول العالم، وحجوزات الفنادق والمنتجعات بعدة درجات،
        الرحلات الجماعية ضمن الكروبات وغيرها بعروض خاصة نسعى لتقديم أفضل البرامج
        السياحية المتنوعة، النقل السياحي الفاخر وتأجير السيارات، والشقق الفندقية
        المفروشة وبأفضل الأسعار.
      </p>
      <p class="mb-8 text-gray-700">
        شغفنا للسفر وإستكشاف وجهات جديدة لا حدود لها.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-gray-900">فريقنا:</h2>
      <p class="mb-2 text-gray-700">
        لدينا فريق كامل من المحترفين والخبراء بأسرار وخبايا الترفيه، ومتخصصون في
        مجال السياحة.
      </p>
      <p class="mb-2 text-gray-700">
        نضم أكبر عدد من المحترفين ومن كافة الجنسيات ونعمل بنظام متوافق مع قوانين
        العمل في كل البلدان.
      </p>
      <p class="mb-8 text-gray-700">
        نتعامل مع أفضل الشركات المختصة التي تخدم السياحة.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-gray-900">خدماتنا:</h2>
      <p class="mb-4 text-gray-700">
        كل عملائنا الذين يحجزون معنا يحظون بتجربة فريدة من نوعها، ويستمتعون
        بأفضل العروض التي نقدمها لهم.
      </p>
      <p class="mb-8 text-gray-700">
        فلدينا باقات جاهزة غير مسبوقة، وأخرى مفصلة حسب طلب الزبائن وبالأيام التي
        يرغبون فيها.
      </p>
      <h2 class="text-2xl font-bold mb-4 text-gray-900">خدماتنا تشمل:</h2>
      <ul class="mb-8 text-gray-700 list-disc">
        <li class="mb-2">
          حجز تذاكر الطيران على كافة الخطوط الجوية الدولية والداخلية لكافة أنحاء
          العالم، ولجميع الدرجات وبأفضل الأسعار وأرخصها وبأفضل المميزات.
        </li>
        <li class="mb-2">
          حجز الإقامة الفندقية المريحة وبتصنيف النجوم والدرجات المنتقاة بعناية
          فائقة من الفنادق والمنتجعات والجزر والشقق المفروشة والفلل.
        </li>
        <li class="mb-2">
          استقبال وتوديع من وإلى المطار، بأحدث وأفخم السيارات والفانات السياحية
          الفاخرة.
        </li>
        <li class="mb-2">البرامج والجولات السياحية المميزة.</li>
        <li class="mb-2">
          توفير أنشطة سياحية إختيارية حسب الطلب مع وجود مرشدين سياحيين محترفين
          يتقنون عدة لغات.
        </li>
        <li class="mb-2">برامج رهيبة لقضاء شهر العسل.</li>
        <li class="mb-2">التأشيرة لعدة دول.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
useHead({
  title: "About Us | Tourexpect",
  meta: [
    {
      name: "description",
      content:
        "Discover the Story Behind Tourexpect: Your Expert Source for Unforgettable Travel Adventures.",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ children: "console.log('Hello world')" }],
});
</script>
