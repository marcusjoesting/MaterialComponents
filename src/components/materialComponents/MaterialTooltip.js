import React, {useState, useEffect} from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import ComponentView from "../ComponentView";


function TooltipComponent(props) {
    let toolProps = {}
    props.fields.forEach((field) => {
        toolProps[field.name] = field.value
    })
    return (<>
            <Tooltip {...toolProps}>
                <div>Hover here for tooltip</div>
            </Tooltip>
        </>
    )
}

export default function MaterialTooltip(props) {
    const [fields, setFields] = useState([
        {name: 'title', type: 'text', value: 'MY TOOLTIP'},
        {name: 'disableFocusListener', type: 'boolean', value: false},
        {name: 'disableHoverListener', type: 'boolean', value: false},
        {name: 'enterDelay', type: 'number', value: 0},
        {name: 'interactive', type: 'boolean', value: false},
        {name: 'leaveDelay', type: 'number', value: 0},
        {name: 'placement', type: 'select', value: 'top', options: ['bottom-end','bottom-start','bottom','left-end','left-start','left','right-end','right-start','right','top-end','top-start','top']},
    ])
    return (<>
            <ComponentView fields={fields} setFields={setFields} name="Tooltip" component={<TooltipComponent fields={fields}/>}/>
        </>
    )
}