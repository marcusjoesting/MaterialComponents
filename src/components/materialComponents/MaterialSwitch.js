import React, {useState, useEffect} from 'react'
import Switch from "@material-ui/core/Switch";
import ComponentView from "../ComponentView";


function SwitchComponent(props) {
    let switchProps = {}
    props.fields.forEach((field) => {
        switchProps[field.name] = field.value
    })
    return (<>
            <Switch {...switchProps}/>
        </>
    )
}

export default function MaterialGrid(props) {
    const [fields, setFields] = useState([
        {name: 'checked', type: 'boolean', value: false},
        {name: 'color', type: 'select', value: 'secondary', options: ['primary','secondary', 'default']},
        {name: 'disabled', type: 'boolean', value: false},
        {name: 'disableRipple', type: 'boolean', value: false},
        {name: 'edge', type: 'select', value: false, options: ['start','edge','false']},
        {name: 'required', type: 'boolean', value: false},
        {name: 'size', type: 'select', value: 'medium', options:['small','medium']},
    ])
    return (<>
            <ComponentView fields={fields} setFields={setFields} name="Switch" component={<SwitchComponent fields={fields}/>}/>
        </>
    )
}