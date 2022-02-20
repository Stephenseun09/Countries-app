import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";

import CountryDetail from "../../components/countries/CountryDetail";
import {
  getAllCountries,
  getCountryByCode,
} from "../../helper-functions/getCountry";

function CountryDetails(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{props.country.name}</title>
        <meta name="description" content={props.country.name} />
      </Head>
      <CountryDetail
        name={props.country.name}
        src={props.country.flags}
        population={props.country.population}
        capital={props.country.capital}
        region={props.country.region}
        currencies={props.country.currencies}
        languages={props.country.lang}
        tld={props.country.tld}
        borders={props.country.borders}
      />
    </>
  );
}

export async function getStaticPaths() {
  const response = await axios.get(
    `https://restcountries.com/v2/all?fields=name,capital,alpha3Code,population,region,flags`
  );

  const countries = await response.data;

  const paths = countries.map((country) => {
    const countryId = country.alpha3Code.toLowerCase();
    return {
      params: {
        countryId,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const response = await axios.get(
    `https://restcountries.com/v2/alpha/${params.countryId}?fields=name,capital,alpha3Code,population,region,flags,topLevelDomain,currencies,languages,borders`
  );

  const country = await response.data;

  return {
    props: {
      country: {
        name: country.name,
        flags: country.flags.png,
        population: country.population,
        region: country.region,
        capital: country.capital,
        currencies: country.currencies,
        lang: country.languages,
        borders: country.borders ?? null,
        tld: country.topLevelDomain ?? null,
        cca3: country.alpha3Code.toLowerCase(),
      },
    },
  };
};

export default CountryDetails;
