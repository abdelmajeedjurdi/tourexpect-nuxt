<template>
  <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto pb-24 pt-4">
    <h3 class="text-main-indigo font-bold w-full text-center my-4">
      {{ $t(visa_name + "-application-form") }}
    </h3>
    <form
      @submit.prevent="submit"
      class="mx-auto w-full max-w-6xl sm:px-4 xl:px-0 space-y-8"
    >
      <div
        v-for="(application_form, i) in application_forms"
        :key="i"
        class="space-y-4"
      >
        <h3 class="text-main-indigo font-bold mx-6 sm:mx-0">
          {{ $t("person_" + (i + 1)) }}
        </h3>
        <div class="border">
          <div class="bg-main-blue py-2 text-center uppercase text-white">
            personal details
          </div>
          <div class="p-8">
            <div class="grid gap-2 sm:grid-cols-2">
              <div class="mt-1">
                <label
                  for="title_en"
                  class="block text-sm text-gray-800 font-bold"
                  >Country of Residence
                  <span class="text-red-500">*</span></label
                >
                <div class="mt-1">
                  <select
                    v-model="application_form.country"
                    class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antartica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegowina">
                      Bosnia and Herzegowina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo">
                      Congo, the Democratic Republic of the
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia (Hrvatska)</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="France Metropolitan">
                      France, Metropolitan
                    </option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard and McDonald Islands">
                      Heard and Mc Donald Islands
                    </option>
                    <option value="Holy See">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran (Islamic Republic of)</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Democratic People's Republic of Korea">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint LUCIA">Saint LUCIA</option>
                    <option value="Saint Vincent">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia (Slovak Republic)</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="Span">Spain</option>
                    <option value="SriLanka">Sri Lanka</option>
                    <option value="St. Helena">St. Helena</option>
                    <option value="St. Pierre and Miguelon">
                      St. Pierre and Miquelon
                    </option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard">
                      Svalbard and Jan Mayen Islands
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syrian Arab Republic</option>
                    <option value="Taiwan">Taiwan, Province of China</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Viet Nam</option>
                    <option value="Virgin Islands (British)">
                      Virgin Islands (British)
                    </option>
                    <option value="Virgin Islands (U.S)">
                      Virgin Islands (U.S.)
                    </option>
                    <option value="Wallis and Futana Islands">
                      Wallis and Futuna Islands
                    </option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
              </div>

              <div class="w-full mt-1">
                <label
                  for="title_en"
                  class="block text-sm text-gray-800 font-bold"
                >
                  Types of Visas <span class="text-red-500">*</span>
                </label>
                <div class="mt-1">
                  <select
                    class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    v-model="application_form.visa_type"
                    name=""
                    id=""
                    required
                  >
                    <option
                      v-for="opt in visa_options"
                      :key="opt"
                      :value="opt.visa_type + '-' + opt.entries"
                    >
                      {{ opt["visa_type"] }} -
                      {{ $t(opt["entries"]) }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="">
                <label
                  for="name"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Your Name</label
                >
                <input
                  type="text"
                  id="name"
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                  v-model="application_form.name"
                />
              </div>
              <div class="">
                <label
                  for="surname"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Surname</label
                >
                <input
                  type="text"
                  id="surname"
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                  v-model="application_form.surname"
                />
              </div>
              <div class="">
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Your email</label
                >
                <input
                  type="email"
                  id="email"
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                  v-model="application_form.email"
                />
              </div>
              <div class="">
                <label
                  for="phone"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Mobile / Whatsapp</label
                >
                <input
                  type="tel"
                  id="phone"
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                  v-model="application_form.phone"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="border">
          <div class="bg-main-blue py-2 text-center uppercase text-white">
            passport and travel information
          </div>
          <div class="p-8">
            <div class="grid gap-2 sm:grid-cols-2">
              <div class="">
                <label
                  for="passport_no"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Passport No.</label
                >
                <input
                  type="text"
                  id="passport_no"
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                  v-model="application_form.passport_no"
                />
              </div>
              <div class="">
                <label
                  for="travel_on"
                  class="mb-2 block text-sm font-medium text-gray-900"
                  >Travel On</label
                >
                <input
                  type="date"
                  id="travel_on"
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                  v-model="application_form.travel_on"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="border">
          <div class="bg-main-blue py-2 text-center uppercase text-white">
            upload documents
          </div>
          <div class="p-8">
            <div class="grid gap-2 sm:grid-cols-2">
              <div>
                <label
                  class="mb-2 block text-sm font-medium text-gray-900"
                  for="passport_doc"
                  >Passport</label
                >
                <input
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  id="passport_doc"
                  max="1024"
                  type="file"
                  required
                  @change="onFileSelected($event, i, 'passport_doc')"
                />
              </div>
              <div>
                <label
                  class="mb-2 block text-sm font-medium text-gray-900"
                  for="national_id"
                  >National ID</label
                >
                <input
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  id="national_id"
                  type="file"
                  required
                  @change="onFileSelected($event, i, 'national_id')"
                />
              </div>
              <div>
                <label
                  class="mb-2 block text-sm font-medium text-gray-900"
                  for="client_photo"
                  >Photo</label
                >
                <input
                  class="block w-full border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  id="client_photo"
                  type="file"
                  required
                  @change="onFileSelected($event, i, 'client_photo')"
                />
              </div>
            </div>

            <div
              class="mt-4 flex flex-col items-center sm:items-start space-y-6"
            >
              <button
                type="button"
                v-if="i > 0"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center mr-2"
                @click="removeForm(i)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mr-2 -ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                Remove Form
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center sm:items-start space-y-6">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="newForm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-2 -ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add Application Form
        </button>
        <div>
          <button
            type="submit"
            v-if="!is_sending"
            class="hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-64 text-base font-semibold text-white outline-none"
          >
            Submit and Proceed to Pay
          </button>
          <button
            type="button"
            v-else
            class="hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-64 text-base font-semibold text-white outline-none cursor-not-allowed"
          >
            <div id="animation">
              <div class="box" id="box1"></div>
              <div class="box" id="box2"></div>
              <div class="box" id="box3"></div>
              <div class="box" id="box4"></div>
            </div>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const localePath = useLocalePath();
const { locale } = useI18n();

let sections = ref([]);
let options = ref([]);
let visa_options = ref([]);
let visa_name = ref(route.params.visa);
let is_sending = ref(false);
const maxSize = 256000; // 250KB in bytes
let application_forms = ref([
  {
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
    country: route.query.country,
    visa: route.params.visa,
    visa_type: route.query.visa_type,
  },
]);

let { data: visa, refresh } = await useFetch(
  () => `visa/${route.params.visa}`,
  {
    transform: (_item) => _item.data,
    baseURL: config.API_BASE_URL,
  }
);

try {
  sections.value = JSON.parse(visa.value["sections"]);
  options.value = JSON.parse(visa.value["options"]);
  options.value.forEach((element) => {
    visa_options.value.push({
      visa_type: element["visa_type_" + locale.value] + " (Adults)",
      price: element["adult_price"],
      entries: element["no_of_entries"],
    });
    visa_options.value.push({
      visa_type: element["visa_type_" + locale.value] + " (Children)",
      price: element["child_price"],
      entries: element["no_of_entries"],
    });
  });
} catch (error) {
  console.error("Error parsing JSON:", error);
}

const validateSize = (tag_id) => {
  var fileInput = document.getElementById(tag_id);
  var fileSize = fileInput.files[0].size;
  if (fileSize > maxSize) {
    alert("File size must be less than 250KB");
    return false;
  }
  return true;
};

function onFileSelected(event, i, tag_id) {
  //here is *
  if (1 == 1 || validateSize(tag_id)) {
    application_forms.value[i][tag_id] = event.target.files[0];
    return;
  }
  document.getElementById(tag_id).value = null;
}

const submit = async () => {
  addRecordsToDB();
  is_sending.value = true;

  application_forms.value.forEach((application) => {
    visa_options.value.forEach((type) => {
      if (application.visa_type == type.visa_type + "-" + type.entries) {
        application.price = type.price;
      }
    });
  });
  window.localStorage.setItem("forms", JSON.stringify(application_forms.value));
  router.push({ path: "payment" });
};

const newForm = () => {
  application_forms.value.push({
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
    country: route.query.country,
    visa: route.params.visa,
    visa_type: route.query.visa_type,
  });
};

const removeForm = (idx) => {
  application_forms.value.splice(idx, 1);
};

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
const clearDB = () => {
  try {
    // Let us open our database
    const request = indexedDB.open("forms", 1);

    request.onsuccess = (event) => {
      const db2 = event.target.result;
      const objectStore = db2
        .transaction("applications_form", "readwrite")
        .objectStore("applications_form")
        .clear();
      objectStore.onsuccess = (event) => {};
    };
  } catch (error) {
    console.error(error);
  }
};
clearDB();

const addRecordsToDB = async () => {
  try {
    // Let us open our database
    const request = indexedDB.open("forms", 1);

    request.onsuccess = (event) => {
      let db2 = request.result;
      const objectStore = db2
        .transaction("applications_form", "readwrite")
        .objectStore("applications_form");
      let i = 0;
      application_forms.value.forEach((form) => {
        objectStore.add({
          name: form["name"],
          surname: form["surname"],
          email: form["email"],
          phone: form["phone"],
          passport_no: form["passport_no"],
          travel_on: form["travel_on"],
          price: form["price"],
          passport_doc: form["passport_doc"],
          national_id: form["national_id"],
          client_photo: form["client_photo"],
          country: form["country"],
          visa: form["visa"],
          visa_type: form["visa_type"],
          isbn: i,
        });
        i++;
      });
    };
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
#animation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 5px;
  height: 5px;
  margin: 2px;
}
.box:nth-child(1) {
  background: white;
  animation: balls 1s linear infinite;
}
.box:nth-child(2) {
  background: white;
  animation: balls 1s 0.1s linear infinite;
}
.box:nth-child(3) {
  background: white;
  animation: balls 1s 0.2s linear infinite;
}
.box:nth-child(4) {
  background: white;
  animation: balls 1s 0.4s linear infinite;
}
@keyframes balls {
  0% {
    transform: sclaeY(1);
  }
  50% {
    transform: scaleY(3);
  }
  100% {
    transform: sclaeY(1);
  }
}
</style>
