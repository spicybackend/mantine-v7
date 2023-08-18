import React from 'react';
import Head from 'next/head';
import { Shell } from '../Shell';
import { Footer } from '../Footer';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Waves } from './Waves/Waves';
import classes from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <Head>
        <title>Mantine</title>
      </Head>
      <Shell withNavbar={false}>
        <div className={classes.root}>
          <Jumbotron />
          <Waves height={40} width={150} />
        </div>
        <Footer />
      </Shell>
    </>
  );
}