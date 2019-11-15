import React from 'react';
import './App.css';
import MaterialGrid from "./components/materialComponents/MaterialGrid";
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkList from "./components/LinkList";
import { Tooltip} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'
import components from "./ComponentList";
import _ from 'lodash'
import MenuItem from "@material-ui/core/MenuItem";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import pink from '@material-ui/core/colors/pink'
import indigo from '@material-ui/core/colors/indigo'
import ThemeColors from "./components/ThemeColors";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Home from './components/Home'
import ColorLensIcon from '@material-ui/icons/ColorLens';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    menuList: {
        position: 'fixed',
        top: 50,
        right: 175,
        backgroundColor: 'white',
        border: '2px solid primary',
        width: 200,
        zIndex: 10050,
        borderTop: 'none'

    },
    colorPicker: {
        position: 'fixed',
        top: 57,
        right: 10,

    }
}));

export default function App() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState(<Home/>)
    const [search, setSearch] = React.useState('')
    const [editColor, setEditColor] = React.useState(false)
    const [primaryColor, setPrimaryColor] = React.useState(indigo)
    const [secondaryColor, setSecondaryColor] = React.useState(pink)
    const [searching, setSearching] = React.useState(false)
    const [theme, setTheme] = React.useState({
        palette: {
            type: 'light',
            primary: primaryColor,
            secondary: secondaryColor,
        }
    })


    const[muiTheme, setMuiTheme] = React.useState(createMuiTheme(theme))


    React.useEffect(() => {
        setMuiTheme(createMuiTheme(theme))
    },[theme])


    React.useEffect(() => {
        setTheme({
            palette: {
                type: theme.palette.type,
                primary: primaryColor,
                secondary: secondaryColor
            }
        })
    }, [primaryColor, secondaryColor])
    const handleSearch =  (evt) => {
        setSearch(evt.target.value)
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const toggleDarkTheme = () => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        setTheme({
            palette: {
                type: newPaletteType,
                primary: primaryColor,
                secondary: secondaryColor
            }
        });
    };


    return (
        <ThemeProvider theme={muiTheme}>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Material-UI Component Builder
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            id='search'
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={search}
                            onClick={() => setSearching(true)}
                            onChange={handleSearch}
                        />
                    </div>
                    <Tooltip title='Edit theme colors'>
                    <IconButton onClick={() => setEditColor(!editColor)} color='inherit'>
                        <ColorLensIcon/>
                    </IconButton>
                    </Tooltip>
                    <Tooltip title='Toggle light/dark mode'>
                        <IconButton onClick={toggleDarkTheme} color='inherit'>
                            {theme.palette.type === 'light' ? <Brightness4Icon/> : <Brightness7Icon/>}
                        </IconButton>
                    </Tooltip>
                    <IconButton color="inherit" onClick={() => window.open('https://github.com/marcusjoesting/MaterialComponents')}>
                        <Tooltip title='View Source Code'>
                        <GitHubIcon/>
                        </Tooltip>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <Typography align='center' variant='h4' color='secondary' onClick={() => setContent(<Home/>)}>MCB</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List><LinkList setContent={setContent} open={open}/></List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {search !== '' && searching &&
                    <ClickAwayListener onClickAway={() => setSearching(false)}>
                    <MenuList className={classes.menuList}>
                        {_.filter(components, (comp) => {
                            return comp.name.toLowerCase().includes(search.toLowerCase())
                        }).map((component) => {
                            return <MenuItem onClick={() => {
                                setContent(component.comp)
                                setSearch('')
                            }}><Typography variant='body1'>{component.icon} {component.name}</Typography></MenuItem>
                        })}
                    </MenuList>
                    </ClickAwayListener>
                    }
                    {content}
                    {editColor &&
                        <ClickAwayListener onClickAway={() => setEditColor(false)}>
                            <div className={classes.colorPicker}>
                                <ThemeColors setPrimaryColor={setPrimaryColor} setSecondaryColor={setSecondaryColor}/>
                            </div>
                        </ClickAwayListener>
                    }
                </Container>
            </main>
        </div>
        </ThemeProvider>
    );
}