import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type HeaderProps = {
  title?: string
};

const Header = ({title = "This is the default title"}: HeaderProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/products">
          <a>Products List</a>
        </Link>
      </nav>
    </header>
  </>
);

export default Header;