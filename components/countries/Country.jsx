import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import numberFormat from "../../helper-functions/numberFormat";

import { motion } from "framer-motion";

import classes from "./Country.module.css";

function Country(props) {
  return (
    <motion.li
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Link href={`/${encodeURIComponent(props.alpha3Code).toLowerCase()}`}>
            <a>
              <Image
                width={500}
                height={300}
                className={classes.img}
                src={props.flags.png}
                alt={props.name + "flag"}
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
        <div className={classes.caption}>
          <h3>{props.name}</h3>
          <p>
            Population: <span>{numberFormat(props.population)}</span>
          </p>
          <p>
            Region: <span>{props.region}</span>
          </p>
          <p>
            Capital: <span>{props.capital}</span>
          </p>
          <Button
            fontSize="12px"
            fontWeight="normal"
            mt="10px"
            size="sm"
            variant="outline"
            bg="var(--accent)"
            color="var(--text)"
            as="a"
            href={`/${encodeURIComponent(props.alpha3Code).toLowerCase()}`}
          >
            Show details
          </Button>
        </div>
      </div>
    </motion.li>
  );
}

export default Country;
