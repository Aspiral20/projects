import Layout from '@/component/layout/Layout'
import TeamDetailMain from '@/component/main/TeamDetailMain'
import Head from 'next/head'
import React from 'react'

const teamDetails = () => {
  return (
    <>
        <Head>
        <title>Nafiab - Team Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon"/>
        </Head>
        <Layout>
            <TeamDetailMain/>
        </Layout>
    </>
  )
}

export default teamDetails