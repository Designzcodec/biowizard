import React from 'react';
// import { makeStyles, createStyles } from '@mui/styles';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ShareIcon from '@mui/icons-material/Share';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     backdrop: {
//       zIndex: 1,
//       color: '#fff',
//     },
//     root: {
//       height: 0,
//       flexGrow: 1,
//     },
//     speedDial: {
//       position: 'fixed',
//       bottom: theme.spacing(2),
//       left: theme.spacing(2),
//     },
//   })
// );

export default function SpeedDiaIcons() {
//   const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(<FavoriteBorderIcon />);

  const SocialLinks = {
    Facebook: 'https://www.facebook.com/webbrainsmedia',
    Instagram: 'https://www.instagram.com/webbrainsmedia/',
    Twitter: 'https://twitter.com/jainsanmati846',
    LinkedIn: 'https://www.linkedin.com/in/sjcodebook/',
  };

  const actions = [
    {
      icon: (
        <FacebookIcon
          style={{ fill: '#3b5998' }}
          onClick={() => handleClick('Facebook')}
        />
      ),
      name: 'Facebook',
    },
    {
      icon: (
        <TwitterIcon
          style={{ fill: '#00acee' }}
          onClick={() => handleClick('Twitter')}
        />
      ),
      name: 'Twitter',
    },
    {
      icon: (
        <InstagramIcon
          style={{ fill: '#3f729b' }}
          onClick={() => handleClick('Instagram')}
        />
      ),
      name: 'Instagram',
    },
    {
      icon: (
        <LinkedInIcon
          style={{ fill: '#0e76a8' }}
          onClick={() => handleClick('LinkedIn')}
        />
      ),
      name: 'LinkedIn',
    },
  ];

  const handleClick = (network) => {
    handleClose();
    window.open(SocialLinks[network], '_blank');
  };

  const handleOpen = () => {
    setOpen(true);
    setIcon(<FavoriteIcon style={{ fill: '#d24769' }} />);
  };


  const handleClose = () => {
    setOpen(false);
    setIcon(<FavoriteBorderIcon />);
  };

  return (
    <div>
       <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        // icon={<SpeedDialIcon openIcon={<ShareIcon />} />}
        onClick={handleOpen}
        direction="left"
        icon={<ShareIcon />}
    
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  )
}