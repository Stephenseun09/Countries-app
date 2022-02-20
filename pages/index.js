import axios from "axios";
import { useSelector } from "react-redux";

import Head from "next/head";
import CountryList from "../components/countries/CountryList";
import Inputs from "../components/Inputs/Inputs";

export default function Home(props) {
  const search = useSelector((state) => state.search.search);
  const selected = useSelector((state) => state.search.selected);

  const searchedCountry = props.countries.filter((country) => {
    if (country.name && search) {
      return country.name.toLowerCase().includes(search.toLowerCase());
    }
  });
  const filteredCountry = props.countries.filter((country) => {
    if (country.region && selected) {
      return country.region.toLowerCase().includes(selected.toLowerCase());
    }
  });

  return (
    <>
      <Head>
        <title>Countries of the world</title>
        <meta
          name="description"
          content="A list of all the countries in the world. Search for a country by name or by region. Get info of countries."
        />
      </Head>
      <Inputs />
      {search && (
        <>
          <h2 className="search-result-text">Search Results for {search}</h2>
          <CountryList countries={searchedCountry} />
        </>
      )}
      {selected && !search && (
        <>
          <h2 className="search-result-text">Showing results for {selected}</h2>
          <CountryList countries={filteredCountry} />
        </>
      )}
      {!search && !selected && <CountryList countries={props.countries} />}
    </>
  );
}

export async function getStaticProps() {
  try {
    // setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v2/all?fields=name,capital,alpha3Code,population,region,flags,borders`
    );
    let countries = await response.data;
    countries.sort(function(a, b){
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });

    return {
      props: {
        countries: countries,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
