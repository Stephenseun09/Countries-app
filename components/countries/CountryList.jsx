import Country from "./Country";
import classes from "./CountryList.module.css";

function CountryList(props) {
  return (
    <ul className={classes.lists}>
      {props.countries.map((country) => (
        <Country
          key={country.alpha3Code}
          alpha3Code={country.alpha3Code}
          population={country.population}
          region={country.region}
          name={country.name}
          capital={country.capital}
          flags={country.flags}
        />
      ))}
    </ul>
  );
}

export default CountryList;
