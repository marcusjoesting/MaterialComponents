import React, {useState} from "react";
import ComponentView from "../ComponentView";
import Slider from "@material-ui/core/Slider";


function SliderComponent(props) {
    let sliderProps = {}
    props.fields.forEach((field) => {
        sliderProps[field.name] = field.value
    })
    return (<div style={{width: '100%'}}>
            <Slider {...sliderProps}/>
        </div>
    )
}

export default function MaterialSlider() {
    const [fields, setFields] = useState([
        {name:'color',type:'select',value:'primary',options:['primary', 'secondary']},
        {name: 'disabled', type:'boolean', value: false},
        {name: 'max', type:'number',value:100},
        {name: 'min', type:'number',value:0},
        {name:'orientation',type:'select',value:'horizontal', options: ['horizontal', 'vertical']},
        {name:'track',type:'select',value:'normal', options:['normal', false, 'inverted']},
        {name:'valueLabelDisplay',type:'select',value:'off', options:['on', 'auto', 'off']},
    ])

    return(
        <>
            <ComponentView component={<SliderComponent fields={fields}/>} fields={fields} name='Slider' setFields={setFields}/>
        </>
    )
}