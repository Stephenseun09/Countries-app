import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import numberFormat from "../../helper-functions/numberFormat";

import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import classes from "./CountryDetail.module.css";

const CountryDetail = (props) => {
  const router = useRouter();

  // let languages = "";
  // for (let language in props.languages) {
  //   languages += props.languages[language] + " ";
  // }
  // let currencies = "";
  // for (let currency in props.currencies) {
  //   currencies += props.currencies[currency].name;
  // }

  const currencies = props.currencies.map(currency=>(currency.name)).join(', ')
  const languages = props.languages.map(language=>(language.name)).join(', ')

  return (
    <section className={classes.countries}>
      <Button
        onClick={() => router.push("/")}
        fontSize="14px"
        bg="var(--accent)"
        transition="all 0.4s"
        color="var(--text)"
        leftIcon={<ArrowBackIcon color="var(--text)" />}
        w={['30%', '20%']}
        _hover={{ background: "none" }}
        _focus={{ outline: "none" }}
      >
        Back
      </Button>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Image
            className="rounded-full"
            objectFit="cover"
            width={500}
            height={300}
            src={props.src}
            alt={props.name + "flag"}
          ></Image>
        </div>
        <div className={classes.details}>
          <h2>{props.name}</h2>
          <div className={classes.captionContainer}>
            <div className={classes.caption}>
              <p>
                Population: <span>{numberFormat(props.population)}</span>
              </p>
              <p>
                Region: <span>{props.region}</span>
              </p>
              <p>
                Capital: <span>{props.capital}</span>
              </p>
            </div>

            <div className={classes.caption}>
              <p>
                Top Level Domain: <span>{props.tld}</span>
              </p>
              <p>
                Currencies: <span>{currencies}</span>
              </p>
              <p>
                Languages: <span>{languages}</span>
              </p>
            </div>
          </div>

          <div className={`${classes.description} ${classes.border}`}>
            <h3>Border Countries:</h3>
            <div className={classes.btnContainer}>
              {/* myArray.filter(item => item.type === 'beta').map(item => item.name)
              {props.borders ? (
                props.countries.map((border) => (
                  <Link
                    key={border}
                    href={`/${encodeURIComponent(border).toLowerCase()}`}
                  >
                    <a className="button">{border}</a>
                  </Link>
                ))
              ) : (
                <p>NA</p>
              )} */}
              {props.borders ? (
                props.borders.map((border) => (
                  <Link
                    key={border}
                    href={`/${encodeURIComponent(border).toLowerCase()}`}
                  >
                    <a className="button">{border}</a>
                  </Link>
                ))
              ) : (
                <p>NA</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
