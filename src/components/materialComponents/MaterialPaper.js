import React, {useState} from "react";
import ComponentView from "../ComponentView";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))
function PaperComponent(props) {
    const classes = useStyles()
    return <Paper className={classes.paper} style={{minHeight: props.fields[3].value, minWidth: props.fields[4].value}} elevation={props.fields[1].value} square={props.fields[0].value}>{props.fields[2].value}</Paper>
}

export default function MaterialPaper() {
    const [fields, setFields] = useState([
        {name:'square', type: 'boolean', value: false},
        {name:'elevation',type:'select',value:1,options:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]},
        {name:'Child Text',type:'text', value:'YOU GOTTA LOVE PAPER'},
        {name: 'height', type:'number', value:500},
        {name: 'width', type:'number', value: 500}
    ])

    return(
        <>
            <ComponentView component={<PaperComponent fields={fields}/>} fields={fields} name='Paper' setFields={setFields}/>
        </>
    )
}