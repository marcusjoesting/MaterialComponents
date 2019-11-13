import React, {useState} from 'react'
import Table from "@material-ui/core/Table";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import {makeStyles} from '@material-ui/core/styles'
import ComponentView from "../ComponentView";
import MenuItem from "@material-ui/core/MenuItem";




const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2)
    },
}))


const MenuComponent = props => {

    const classes = useStyles()
    return(
        <Menu>
            <MenuItem>{props.fields[0].value}</MenuItem>
            <MenuItem>{props.fields[1].value}</MenuItem>
            <MenuItem>{props.fields[2].value}</MenuItem>
            <MenuItem>{props.fields[3].value}</MenuItem>
        </Menu>
    )
}


export default function MaterialMenu(props) {
    const [fields, setFields] = useState([
        {name: 'Item 1', type:'text', value:'1'},
        {name: 'Item 2', type:'text', value:'2'},
        {name: 'Item 3', type:'text', value:'3'},
        {name: 'Item 4', type:'text', value:'4'},

    ])
    return(
        <>
            <ComponentView component={<MenuComponent fields={fields}/>} name={'Menu'} fields={fields} setFields={setFields}/>
        </>
    )
}