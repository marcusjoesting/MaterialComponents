import React, {useState} from 'react'
import Typography from "@material-ui/core/Typography";
import ComponentView from "../ComponentView";

function TypographyComponent(props) {
    return <Typography align={props.fields[0].value} color={props.fields[1].value} display={props.fields[2].value} gutterBottom={props.fields[3].value} variant={props.fields[4].value}>{props.fields[5].value}</Typography>
}

export default function MaterailTypography(props) {
    const [fields, setFields] = useState([
        {name:'align', type: 'select', value: 'inherit', options: ['inherit','left','center','right','justify']},
        {name:'color',type:'select',value:'secondary',options:['initial','inherit','primary', 'secondary','textPrimary','textSecondary','error']},
        {name:'display',type:'select',value:'initial',options:['initial','block','inline']},
        {name:'gutterBottom',type:'boolean',value:false},
        {name:'variant',type:'select',value:'body1',options:['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','button','overline','srOnly','inherit']},
        {name:'child',type:'text',value:'Our Typography Component'}
    ])

    return(
        <>
            <ComponentView component={<TypographyComponent fields={fields}/>} name='Typography' fields={fields} setFields={setFields}/>
            </>
    )
}