import React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BannerImg from '../../../public/banner.png'
import styles from './banner.module.scss';
// const useStyles = makeStyles((theme) => ({
//   section: {
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundColor: theme.palette.primary.dark,
//     paddingTop: theme.spacing(12),
//     paddingBottom: theme.spacing(12),
//     [theme.breakpoints.up('md')]: {
//       paddingTop: theme.spacing(30),
//       paddingBottom: theme.spacing(30),
//     }
//   },
//   description: {
//     color: theme.palette.background.secondary
//   },
//   primaryAction: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.down('xs')]: {
//       width: '100%',
//       marginRight: theme.spacing(0),
//       marginBottom: theme.spacing(2),
//     }
//   },
//   secondaryAction: {
//     [theme.breakpoints.down('xs')]: {
//       width: '100%',
//     }
//   }
// }));

export default function Banner(props) {
//   const classes = useStyles();

  const content = {
    'header-p1': 'Lorem ipsum dolor',
    'header-p2': 'sit amet, consectetur adipiscing elit.',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
    'primary-action': 'Action',
    'secondary-action': 'Action',
    'pattern': 'nereus-assets/img/bg/pattern2.png',
    ...props.content
  };

  return (
    <section className={styles['banner']}>
         <div className={styles['banner__bg']}>
      {/* <Image src={BannerImg} className={styles['banner__img']} /> */}
      </div>
        <div  className={styles['banner__container']}>

        <Box textAlign="center" color="common.black">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="secondary" variant="h2" component="span">{content['header-p1']} </Typography>
            <Typography variant="h2" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <Button variant="contained" color="secondary">{content['primary-action']}</Button> &nbsp;
            <Button variant="outlined" color="secondary">{content['secondary-action']}</Button>
          </Box>
        </Box>
      </div>
     
      
    </section>
  );
}