import React from 'react'
import Head from 'next/head';
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
import { theme } from "../utils/theme";
import Layout from '../components/Layout/Layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Bio Wizard</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </StyledEngineProvider>
            </ThemeProvider>
        </div>

    )
}