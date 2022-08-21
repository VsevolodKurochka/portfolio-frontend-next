import React from 'react';
import {useTranslation} from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Wrapper from 'components/wrapper/Wrapper';
import Greeting from '../content/home/greeting/Greeting';
import Projects from '../content/home/projects/Projects';
import Clients from '../content/home/clients/Clients';
import Reviews from '../content/home/reviews/Reviews';
import client from '../apollo-client';
import gql from 'graphql-tag';
import {GetServerSidePropsContext, GetStaticPropsContext} from 'next';

export default function Home({projects, loading}) {
  console.log(projects, loading)
  const { t } = useTranslation('common')

  return (
    <>
      <Header />
      <Wrapper>
        <Greeting />
        {/*<Projects />
        <Clients />
        <Reviews />*/}
      </Wrapper>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const { data, loading } = await client.query({
    query: gql`
      query{
        projects(locale: "ru-RU") {
          id,
          title, 
          image {
            url
          },
          categories {
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      projects: data.projects,
      loading
    }
  }
}

/*
export async function getServerSideProps(context: GetServerSidePropsContext) {
  //console.log(context);
  const { data } = await client.query({
    query: gql`
      query{
        projects(locale: "ru-RU") {
          id,
          title, 
          image {
            url
          },
          categories {
            name
          }
        }
      }
    `,
  });

  return {
    props: {
      projects: data
    },
  };
}*/
