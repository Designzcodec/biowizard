import Banner from '@/components/Banner';
import React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../scss/home.module.scss'
import Slider, { SliderItem } from '@/components/Slider';
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
            <section className={styles['home__toppers']}>
                <h2>Our Toppers</h2>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container alignItems="center" spacing={4}>
                        <Grid item xs={12} md={4} sm={4}>
                            <img src="https://place-hold.it/150x150" width={'150'} height={'150'} />
                            <div className={styles['home__toppers__details']}>
                                <h4 className={styles['home__toppers__details__name']}>Lorem Ipsum </h4>
                                <p className={styles['home__toppers__details__percent']}>97%</p>
                                <p className={styles['home__toppers__details__type']}>CET</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <img src="https://place-hold.it/150x150" width={'150'} height={'150'} />
                            <div className={styles['home__toppers__details']}>
                                <h4 className={styles['home__toppers__details__name']}>Lorem Ipsum </h4>
                                <p className={styles['home__toppers__details__percent']}>97%</p>
                                <p className={styles['home__toppers__details__type']}>CET</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} sm={4}>
                            <img src="https://place-hold.it/150x150" width={'150'} height={'150'} />
                            <div className={styles['home__toppers__details']}>
                                <h4 className={styles['home__toppers__details__name']}>Lorem Ipsum </h4>
                                <p className={styles['home__toppers__details__percent']}>97%</p>
                                <p className={styles['home__toppers__details__type']}>CET</p>
                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </section>
            <section className={styles['home__toppers']}>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/Viu00qqJzmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            <section>
                <Slider>
                    <SliderItem>Item 1</SliderItem>
                    <SliderItem>Item 2</SliderItem>
                    <SliderItem>Item 3</SliderItem>
                </Slider>
            </section>
        </div>
    );
};

export default Home;