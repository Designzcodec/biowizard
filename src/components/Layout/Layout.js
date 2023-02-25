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
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <div>
                <Image
                    src={Logo}
                    alt="Picture of the author"
                    width='120'
                />
            </div>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link key={item.title} href={item?.link} legacyBehavior>
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
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
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <Image
                            src={Logo}
                            alt="Picture of the author"
                            width='120'
                        />
                    </div>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                {children}
            </Box>
            <SpeedDiaIcons />
        </Box>
    );
};

export default Layout;