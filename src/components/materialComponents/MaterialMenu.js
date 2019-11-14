import React, {useState} from 'react'
import Table from "@material-ui/core/Table";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import {makeStyles} from '@material-ui/core/styles'
import ComponentView from "../ComponentView";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2)
    },
}))


const MenuComponent = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    let menuItemProps = {}
    menuItemProps[props.fields[4].name] = props.fields[4].value
    menuItemProps[props.fields[5].name] = props.fields[5].value
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem {...menuItemProps} onClick={handleClose}>{props.fields[0].value}</MenuItem>
                <MenuItem {...menuItemProps} onClick={handleClose}>{props.fields[1].value}</MenuItem>
                <MenuItem {...menuItemProps} onClick={handleClose}>{props.fields[2].value}</MenuItem>
                <MenuItem {...menuItemProps} onClick={handleClose}>{props.fields[3].value}</MenuItem>
            </Menu>
        </div>
    )
}


export default function MaterialMenu(props) {
    const [fields, setFields] = useState([
        {name: 'Item 1', type:'text', value:'1'},
        {name: 'Item 2', type:'text', value:'2'},
        {name: 'Item 3', type:'text', value:'3'},
        {name: 'Item 4', type:'text', value:'4'},
        {name: 'dense', type: 'boolean', value: false},
        {name: 'disableGutters', type: 'boolean', value: false},


    ])
    return(
        <>
            <ComponentView component={<MenuComponent fields={fields}/>} name={'Menu'} fields={fields} setFields={setFields}/>
        </>
    )
}