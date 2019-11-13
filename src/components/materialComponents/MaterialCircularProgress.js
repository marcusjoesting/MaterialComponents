import React, {useState} from "react";
import ComponentView from "../ComponentView";
import CircularProgress from "@material-ui/core/CircularProgress";


function CircularProgressComponent(props) {
    return <CircularProgress
            color={props.fields[0].value}
            disableShrink={props.fields[1].value}
            size={props.fields[2].value}
            thickness={props.fields[3].value}
            value={props.fields[4].value}
            variant={props.fields[5].value}/>
}

export default function MaterialCircularProgress(props) {
    const [fields, setFields] = useState([
        {name:'color',type:'select',value:'primary',options:['primary', 'secondary','inherit']},
        {name:'disableShrink',type:'boolean',value:false},
        {name:'size',type:'number',value:40},
        {name:'thickness',type:'number',value:3.6},
        {name:'value',type:'number',value:0},
        {name:'variant',type:'select',value:'indeterminate', options:['determinate','indeterminate','static']},
    ])

    return(
        <>
            <ComponentView component={<CircularProgressComponent fields={fields}/>} fields={fields} name='Circular Progress' setFields={setFields}/>
        </>
    )
}