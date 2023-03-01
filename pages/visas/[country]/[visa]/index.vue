<template>
  <div class="my-28">
    <div
      class="relative overflow-hidden w-full block md:flex items-center bg-no-repeat bg-cover bg-center"
    >
      <img
        src="/images/visa_application_banner.jpg"
        alt="Visa Application"
        class="w-full"
      />
    </div>
    <div
      class="px-2 sm:px-4 xl:px-0 md:flex w-full max-w-6xl mx-auto my-10 justify-between space-x-0 sm:space-x-2"
    >
      <div class="w-full md:w-3/4 rounded p-2">
        <div v-for="section in sections" :key="section">
          <list-section
            v-if="section.is_bullet"
            class=""
            :section_list="section['section_text_' + locale]"
            :section_title="section['section_title_' + locale]"
          />
          <base-section
            v-else
            class=""
            :section_description="section['section_text_' + locale]"
            :section_title="section['section_title_' + locale]"
          />
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <h3 class="text-main-indigo font-bold">
            {{ visa["title_" + locale] }}
          </h3>
          <table class="w-full text-xs text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-main-orange">
              <tr class="text-white">
                <th scope="col" class="px-6 py-3">Type</th>
                <th scope="col" class="px-6 py-3">No. of Entries</th>
                <th scope="col" class="px-6 py-3">en Validity</th>
                <th scope="col" class="px-6 py-3">En Processing Time</th>
                <th scope="col" class="px-6 py-3">Adult Price</th>
                <th scope="col" class="px-6 py-3">Child Price</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="(option, i) in options" :key="i">
                <th scope="row" class="px-6 py-4">
                  {{ $t(option["visa_type_" + locale]) }}
                </th>
                <td class="px-6 py-4">
                  {{ $t(option.no_of_entries) }}
                </td>
                <td class="px-6 py-4">
                  {{ option["visa_validity_" + locale] }}
                </td>
                <td class="px-6 py-4">
                  {{ option["processing_time_" + locale] }}
                </td>
                <td class="px-6 py-4">
                  {{ option.adult_price + "$" }}
                </td>
                <td class="px-6 py-4">
                  {{ option.child_price + "$" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w-full md:w-1/4 mx-auto">
        <div class="">
          <div class="border-2 border-gray-500">
            <div
              class="border-b-2 border-gray-500 bg-main-blue py-2 text-center text-xl text-white"
            >
              {{ $t("apply_to_visa") }}
            </div>
            <div class="p-3">
              <form @submit.prevent="proceedToApply()" class="">
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
                      class="w-full border border-gray-500 p-2"
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
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
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
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
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
                      <option value="Slovakia">
                        Slovakia (Slovak Republic)
                      </option>
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
                    >Types of Visas <span class="text-red-500">*</span></label
                  >
                  <div class="mt-1">
                    <select
                      class="w-full border border-gray-500 p-2"
                      v-model="application_form.visa_type"
                      name=""
                      id=""
                      required
                    >
                      <option
                        v-for="opt in visa_options"
                        :key="opt"
                        :value="opt.visa_type"
                      >
                        {{ opt["visa_type"] }}
                      </option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  class="bg-main-orange px-8 py-2 rounded-full text-white mt-4 w-full"
                >
                  {{ $t("proceed_to_apply") }}
                </button>
              </form>
            </div>
          </div>
          <!-- 1111111111111111111111111111111111 -->
          <div class="border-2 border-gray-500 mt-4">
            <div
              class="border-b-2 border-gray-500 bg-main-blue py-2 text-center text-xl text-white"
            >
              {{ $t("inquiry") }}
            </div>
            <div class="p-3">
              <Inquire
                type="visa"
                :item_name="visa.title_en"
                :url="'https://tourexpect.com' + route.path"
              />
              <a
                :href="
                  'https://wa.me/+9647509882000/?text=' +
                  'https://tourexpect.com' +
                  route.fullPath +
                  '\u000a I want to ask about this'
                "
                target="_blank"
                class="flex bg-green-400 text-white rounded-full items-center py-2 px-4 space-x-2 mx-auto mt-4"
              >
                <img src="/images/whatsapp.svg" alt="whatsapp" class="h-6" />
                <span>{{ $t("whatsapp_text") }}</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
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

let application_form = ref({
  country: "Iraq",
  visa_type: "",
});
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
    });
    visa_options.value.push({
      visa_type: element["visa_type_" + locale.value] + " (Children)",
      price: element["child_price"],
    });
  });
  application_form.value["visa_type"] = visa_options.value[0]["visa_type"];
} catch (error) {
  console.error("Error parsing JSON:", error);
}
const proceedToApply = () => {
  router.push({
    path: `${route.params.visa}/proceed-to-apply`,
    query: application_form.value,
  });
};
</script>
