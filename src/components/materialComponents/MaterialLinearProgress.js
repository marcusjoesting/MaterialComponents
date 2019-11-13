import React, {useState} from "react";
import ComponentView from "../ComponentView";
import LinearProgress from "@material-ui/core/LinearProgress";


function LinearProgressComponent(props) {
    return (<div style={{width: '100%'}}>
    <LinearProgress
        color={props.fields[0].value}
        value={props.fields[1].value}
        valueBuffer={props.fields[2].value}
        variant={props.fields[3].value}/>
        </div>
    )
}

export default function MaterialLinearProgress() {
    const [fields, setFields] = useState([
        {name:'color',type:'select',value:'primary',options:['primary', 'secondary']},
        {name:'value',type:'number',value:null},
        {name:'valueBuffer',type:'number',value:null},
        {name:'variant',type:'select',value:'indeterminate', options:['determinate','indeterminate','buffer','query']},
    ])

    return(
        <>
            <ComponentView component={<LinearProgressComponent fields={fields}/>} fields={fields} name='Linear Progress' setFields={setFields}/>
        </>
    )
}