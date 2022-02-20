import axios from "axios";

// export const getCountryByName = async (name) => {
//   const response = await axios.get(
//     `https://restcountries.com/v3.1/name/${name}`
//   );

//   const countries = await response.data;
//   console.log(countries);
//   return countries;
// };

export const getCountryByCode = async (code) => {
  const response = await axios.get(
    `https://restcountries.com/v2/alpha/${code}?fields=name,capital,alpha3code,population,region,flags,topLevelDomain,currencies,languages,borders`
  );

  const country = await response.data;
  return country;
};

export const getAllCountries = async () => {
  const response = await axios.get(
    `https://restcountries.com/v2/all?fields=name,capital,cca3,population,region,flags`
  );

  const countries = await response.data;
  return countries;
};
