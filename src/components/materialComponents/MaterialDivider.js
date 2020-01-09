import React, {useState} from "react";
import ComponentView from "../ComponentView";
import Divider from "@material-ui/core/Divider";


function DividerComponent(props) {
    let dividerProps = {}
    props.fields.forEach((field) => {
        dividerProps[field.name] = field.value
    })
    return (<div style={{width: '500px'}}>
            <Divider/>
        </div>
    )
}

export default function MaterialDivider() {
    const [fields, setFields] = useState([
        {name: 'absolute', type: 'boolean', value: false},
        {name: 'light', type: 'boolean', value: false},
        {name: 'orientation', type: 'select', value: 'horizontal', options: ['horizontal', 'vertical']},
        {name: 'variant', type: 'select', value: 'fullWidth', options: ['fullWidth', 'inset', 'middle']}
    ])

    return(
        <>
            <ComponentView component={<DividerComponent fields={fields}/>} fields={fields} name='Divider' setFields={setFields}/>
        </>
    )
}