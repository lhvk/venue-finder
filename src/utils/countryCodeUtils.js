const countryCodes = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  AntiguaAndBarbuda: "AG",
  Argentina: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  Bolivia: "BO",
  BosniaAndHerzegovina: "BA",
  Botswana: "BW",
  Brazil: "BR",
  Brunei: "BN",
  Bulgaria: "BG",
  BurkinaFaso: "BF",
  Burundi: "BI",
  CaboVerde: "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  CentralAfricanRepublic: "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  CostaRica: "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  CzechRepublic: "CZ",
  DemocraticRepublicOfTheCongo: "CD",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  DominicanRepublic: "DO",
  EastTimor: "TL",
  Ecuador: "EC",
  Egypt: "EG",
  ElSalvador: "SV",
  EquatorialGuinea: "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  GuineaBissau: "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  IvoryCoast: "CI",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Kosovo: "XK",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  MarshallIslands: "MH",
  Mauritania: "MR",
  Mauritius: "MU",
  Mexico: "MX",
  Micronesia: "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  NewZealand: "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  NorthKorea: "KP",
  NorthMacedonia: "MK",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  Panama: "PA",
  PapuaNewGuinea: "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  SaintKittsandNevis: "KN",
  SaintLucia: "LC",
  SaintVincentAndTheGrenadines: "VC",
  Samoa: "WS",
  SanMarino: "SM",
  SaoTomeAndPrincipe: "ST",
  SaudiArabia: "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  SierraLeone: "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  SolomonIslands: "SB",
  Somalia: "SO",
  SouthAfrica: "ZA",
  SouthKorea: "KR",
  SouthSudan: "SS",
  Spain: "ES",
  SriLanka: "LK",
  Sudan: "SD",
  Suriname: "SR",
  Sweden: "SE",
  Switzerland: "CH",
  Syria: "SY",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  TimorLeste: "TL",
  Togo: "TG",
  Tonga: "TO",
  TrinidadAndTobago: "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  UnitedArabEmirates: "AE",
  UnitedKingdom: "GB",
  UnitedStates: "US",
  USA: "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  VaticanCity: "VA",
  Venezuela: "VE",
  Vietnam: "VN",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

const continents = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];

export function getFlag(countryName) {
  // Remove spaces and symbols from the country name
  const cleanedCountryName = countryName
    .replace(/[^\w\s]/g, "")
    .replace(/\s/g, "");

  // Check if the cleaned country name exists in the countryCodes object. If not, set Norway to default flag
  if (!countryCodes.hasOwnProperty(cleanedCountryName)) {
    return `https://flagsapi.com/NO/flat/24.png`;
  }

  // Get the country code and return the flag URL
  const countryCode = countryCodes[cleanedCountryName];
  return `https://flagsapi.com/${countryCode}/flat/24.png`;
}
export function getAltText(countryName) {
  // Remove spaces and symbols from the country name
  const cleanedCountryName = countryName
    .replace(/[^\w\s]/g, "")
    .replace(/\s/g, "");

  // Check if the cleaned country name exists in the countryCodes object
  if (!countryCodes.hasOwnProperty(cleanedCountryName)) {
    return null;
  }

  // Get the country code and return the flag URL
  return countryName;
}

export function getCountries() {
  function separateCapitalLetters(str) {
    return str.replace(/([A-Z])/g, " $1").trim();
  }

  return Object.keys(countryCodes).map((countryName) => (
    <option
      key={countryName}
      value={countryName}>
      {separateCapitalLetters(countryName)}
    </option>
  ));
}

export function getContinents() {
  return continents.map((continentName) => (
    <option
      key={continentName}
      value={continentName}>
      {continentName}
    </option>
  ));
}
