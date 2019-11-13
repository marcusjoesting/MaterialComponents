import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField'
import {makeStyles} from "@material-ui/core";
import ComponentForm from "../ComponentForm";
import ComponentView from "../ComponentView";
const useStyles = makeStyles(theme => ({
    textField: {
        margin: theme.spacing(2)
    },
}))

const TextComponent = props => {
    const classes = useStyles()
    return(
        <Grid item xs={12}>
            <TextField className={classes.textField} color={props.fields[0].value} disabled={props.fields[1].value} error={props.fields[2].value} fullWidth={props.fields[3].value} helperText={props.fields[4].value} label={props.fields[5].value} margin={props.fields[6].value} multiline={props.fields[7].value}
                       placeholder={props.fields[8].value} required={props.fields[9].value} type={props.fields[10].value} variant={props.fields[11].value}/>
        </Grid>
    )
}
export default function MaterialTextField(props) {
    const [fields, setFields] = useState([
        {name:'color',type:'select',value:'secondary',options:['primary', 'secondary']},
        {name:'disabled',type:'boolean',value:false},
        {name:'error',type:'boolean',value:false},
        {name:'fullWidth',type:'boolean',value:false},
        {name:'helperText',type:'text',value:''},
        {name:'label',type:'text',value:'Our Text Field'},
        {name:'margin',type:'select',value:'none',options:['none','dense','normal']},
        {name:'multiline',type:'boolean',value:false},
        {name:'placeholder',type:'text',value:''},
        {name:'required',type:'boolean',value:false},
        {name:'type',type:'select',value:'primary',options:['string','button','checkbox', 'color','date','email','file','hidden','image','month','number','password','radio','range','reset','search','submit','tel','text','time','url','week']},
        {name:'variant',type:'select',value:'standard',options:['standard','outlined','filled']},
    ])

    return(
        <>
            <ComponentView component={<TextComponent fields={fields}/>} name='TextField' fields={fields} setFields={setFields}/>
            </>
    )
}