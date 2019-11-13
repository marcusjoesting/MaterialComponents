import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import ComponentView from "../ComponentView";
import Checkbox from "@material-ui/core/Checkbox";
function CheckboxComponent(props) {
    return <Checkbox checked={props.fields[0].value} color={props.fields[1].value} disabled={props.fields[2].value} disableRipple={props.fields[3].value} indeterminate={props.fields[4].value} required={props.fields[5].value} />
}

export default function MaterialCheckbox(props) {
    const [fields, setFields] = useState([
        {name:'checked', type: 'boolean', value: false},
        {name:'color',type:'select',value:'secondary',options:['primary', 'secondary','default']},
        {name:'disabled',type:'boolean',value:false},
        {name:'disableRipple',type:'boolean',value:false},
        {name:'indeterminate',type:'boolean',value:false},
        {name:'required',type:'boolean',value:false},
    ])

    return(
        <>
            <ComponentView component={<CheckboxComponent fields={fields}/>} fields={fields} name='Checkbox' setFields={setFields}/>
        </>
    )
}