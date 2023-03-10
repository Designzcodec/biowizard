import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import styles from './FindCourses.module.scss';

const FindCourses = () => {
    return (
        <div className={styles['container']}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container alignItems="center">
                    <Grid className={styles['container__backgroundImg']} item xs={12} md={6} sm={12}>
                        <img className={styles['container__backgroundImg__img']} src="https://productimages.withfloats.com/tile/60f27ad00f512b0001c6cf88.jpg" width={'100%'} />
                    </Grid>
                    <Grid item xs={12} md={6} sm={12}>
                        <div className={styles['container__text']}>
                            <div><ManageSearchIcon sx={{ fontSize: '4rem', color:'#52d1e7' }} /></div>
                            <h2 className={styles['container__text__h2']}>Find Courses </h2>
                            <p className={styles['container__text__p']}>Find your courses now</p>
                            <div><Button type='button' component="a" href="/courses" className={styles['container__text__button']} variant='contained'>Find Now</Button></div>
                        </div>
                    </Grid>


                </Grid>
            </Box>
        </div>
    );
};

export default FindCourses;