import Banner from '@/components/Banner';
import React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../scss/home.module.scss'
import Slider, { SliderItem } from '@/components/Slider';
import FindCourses from '@/components/FindCourses';
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
            <section className={styles['home__iframe']}>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/Viu00qqJzmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            <section className={styles['home__slides']}>
                <Slider>
                    <SliderItem>
                        <div className={styles['home__slides__container']}>
                            <div><img src='https://place-hold.it/200x200' /></div>
                            <div className={styles['home__slides__container__text']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. Lorem Ipsum has</div>
                        </div>
                    </SliderItem>
                    <SliderItem>
                    <div className={styles['home__slides__container']}>
                            <div><img src='https://place-hold.it/200x200' /></div>
                            <div className={styles['home__slides__container__text']}>Lorem Ipsum is simply dummy simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. text of the printing and typesetting industry. Lorem Ipsum has</div>
                        </div>
                    </SliderItem>
                    <SliderItem>
                    <div className={styles['home__slides__container']}>
                            <div><img src='https://place-hold.it/200x200' /></div>
                            <div className={styles['home__slides__container__text']}>Lorem Ipsumsimply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry. simply dummy text of the printing and typesetting industry.  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</div>
                        </div>
                    </SliderItem>
                </Slider>
            </section>
            <FindCourses />
        </div>
    );
};

export default Home;