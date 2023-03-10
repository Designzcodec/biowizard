import React from 'react';
// import 
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Layout.module.scss';
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import SpeedDiaIcons from '../SpeedDiaIcons';

const Layout = (props) => {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawerWidth = 240;
    const navItems = [
        { link: '/home', title: 'Home' },
        { link: '/about', title: 'About' },
        { link: '/courses', title: 'Courses' },
        { link: '/gallery', title: 'Gallery' },
        { link: '/contact', title: 'Contact' }];
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}>
            {/* <div>
                <Image
                    src={Logo}
                    alt="Picture of the author"
                    width='120'
                />
            </div> */}

            <List>
                {navItems.map((item) => (
                    <Link key={item.title} href={item?.link} legacyBehavior>
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className={styles['container']}>
            <CssBaseline />

            <AppBar className={styles['container__appbar']} component="nav">
                <Toolbar className={styles['container__alignment']}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={styles['container__logo']}>
                        <Link href={'/'} legacyBehavior>
                            <Image
                                src={Logo}
                                alt="Picture of the author"
                                width='120'
                            />
                        </Link>
                    </div>

                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        {navItems?.map((item) =>
                        (<Link key={item.title} href={item?.link} legacyBehavior>
                            <a className={styles['container__links']} key={item.title}>{item.title}</a>
                        </Link>)
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    className={styles['container__drawer']}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main">
                <Toolbar />
                {children}

            </Box>
            <footer className={styles['container__footer']}>
                <div className={styles['container__footer__wrapper']}>
                    <div className={styles['container__footer__wrapper__topFooter']}>

                        <div><Image
                            src={Logo}
                            alt="Picture of the author"
                            width='120'
                        /></div>
                        <div>{navItems?.map((item) =>
                        (<Link key={item.title} href={item?.link} legacyBehavior>
                            <a className={styles['container__footer__wrapper__topFooter__links']} key={item.title}>{item.title}</a>
                        </Link>)
                        )}</div>
                    </div>
                    <hr className={styles['container__footer__wrapper__hr']} />
                    <div>
                        <div className={styles['container__footer__wrapper__bottomFooter']}>

                            <div> &copy; 2023 | All Rights Reserved.</div>
                            <div>biowizardacademy@gmail.com</div>
                        </div>
                    </div>
                </div>

            </footer>
            <SpeedDiaIcons />
        </Box>
    );
};

export default Layout;