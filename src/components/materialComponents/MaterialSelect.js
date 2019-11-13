import React, {useState} from "react";
import ComponentView from "../ComponentView";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));

function SelectComponent(props) {
    const classes = useStyles()
    return (
        <FormControl className={classes.formControl}>
            <InputLabel>{props.fields[8].value}</InputLabel>
        <Select autoWidth={props.fields[0].value}
                displayEmpty={props.fields[1].value}
                labelId={props.fields[3].value}
                labelWidth={props.fields[4].value}
                multiple={props.fields[5].value}
                native={props.fields[6].value}
                variant={props.fields[7].value}
        >
            <MenuItem value={1}>
                Menu Item 1
            </MenuItem>
            <MenuItem value={2}>
                Menu Item 2
            </MenuItem>
            <MenuItem value={3}>
                Menu Item 3
            </MenuItem>
            <MenuItem value={4}>
                Menu Item 4
            </MenuItem>
        </Select>
        </FormControl>
    )
}

export default function MaterialSelect() {
    const [fields, setFields] = useState([
        {name:'autoWidth', type: 'boolean', value: false},
        {name:'displayEmpty', type: 'boolean', value: false},
        {name:'value',type:'text',value:'Menu Item 1'},
        {name:'labelId',type:'text', value:''},
        {name: 'labelWidth', type:'number', value:0},
        {name:'multiple', type: 'boolean', value: false},
        {name:'native', type: 'boolean', value: false},
        {name:'variant',type:'select',value:'standard',options:['standard','outlined','filled']},
        {name:'Label',type:'text', value:'Our Label'},


    ])

    return(
        <>
            <ComponentView component={<SelectComponent fields={fields}/>} fields={fields} name='Select' setFields={setFields}/>
        </>
    )
}