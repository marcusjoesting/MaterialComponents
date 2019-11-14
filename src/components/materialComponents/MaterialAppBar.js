import React, {useState} from 'react'
import ComponentView from "../ComponentView";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const AppBarComponent = props => {
    const classes = useStyles()
    return (
        <AppBar position={props.fields[1].value} color={props.fields[1].value}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}


export default function MaterialMenu(props) {
    const [fields, setFields] = useState([
        {name: 'color', type: 'select', value: 'primary', options: ['default', 'inherit','primary', 'secondary']},
        {name: 'position', type: 'select', value: 'relative', options: ['absolute', 'fixed', 'relative', 'static', 'sticky']}
    ])
    return(
        <>
            <ComponentView component={<AppBarComponent fields={fields}/>} name={'AppBar'} fields={fields} setFields={setFields}/>
        </>
    )
}