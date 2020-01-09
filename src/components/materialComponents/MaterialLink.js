import React, {useState} from "react";
import ComponentView from "../ComponentView";
import Link from "@material-ui/core/Link";




function LinkComponent(props) {
    return <Link color={props.fields[0].value} underline={props.fields[1].value} href={props.fields[2].value}>{props.fields[2].value}</Link>
}

export default function MaterialLink(props) {
    const [fields, setFields] = useState([
        {name: 'color', type: 'select', value: 'primary', options: ['default', 'error','inherit','primary','secondary','textPrimary','textSecondary']},
        {name: 'underline', type: 'select', value: 'hover', options: ['none', 'hover', 'always']},
        {name: 'link', type: 'text', value:'https://www.google.com'}
    ])

    return(
        <>
            <ComponentView component={<LinkComponent fields={fields}/>} fields={fields} name='Link' setFields={setFields}/>
        </>
    )
}