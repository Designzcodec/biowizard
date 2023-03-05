import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const FindCourses = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} md={6} sm={12}>
                            <img src="https://place-hold.it/150x150" width={'100%'} />
                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <div>
                                <h4>Find Your Courses </h4>
                                <div><Button>Find Now</Button></div>
                            </div>
                        </Grid>
                      

                    </Grid>
                </Box>
        </div>
    );
};

export default FindCourses;