import Banner from '@/components/Banner';
import React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../scss/home.module.scss'
const Home = () => {
    return (
        <div className={styles['home']}>
            <Banner />
            <section className={styles['home__features']}>
            <h2>Our Features</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container alignItems="center" spacing={4}>
                    <Grid item xs={12} md={3} sm={6}>
                        <img src="https://place-hold.it/100x100" width={'100'} height={'100'} />
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <img src="https://place-hold.it/100x100" width={'100'} height={'100'} />

                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <img src="https://place-hold.it/100x100" width={'100'} height={'100'} />

                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <img src="https://place-hold.it/100x100" width={'100'} height={'100'} />

                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </Grid>
                </Grid>
            </Box>
            </section>
           
        </div>
    );
};

export default Home;