import React, {useState,useEffect} from 'react'
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles'
import ComponentView from "../ComponentView";
import jsxToString from 'jsx-to-string'




const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2)
    },
}))

const ButtonComponent = props => {
    const classes = useStyles()
    const buttonProps = {}
    props.fields.forEach((field) => {
        if (field.name !== 'child') {
            buttonProps[field.name] = field.value
        }
    })
    const comp = <Button className={classes.button} {...buttonProps}>{props.fields[5].value}</Button>
    console.log(comp.toString)
    useEffect(() => {
        props.setCode(jsxToString(comp).replace('WithStyles(ForwardRef(','').replace('))','').replace('WithSyles(ForwardRef',''))
    }, [buttonProps])
    return(<>
        {comp}
        </>
    )
}


export default function MaterialButton(props) {
    const [fields, setFields] = useState([
        {name:'color',type:'select',value:'secondary',options:['primary', 'secondary', 'inherit', 'default']},
        {name:'disabled',type:'boolean',value:false},
        {name:'size',type:'select',value:'medium',options:['small','medium','large']},
        {name:'fullWidth',type:'boolean',value:false},
        {name:'variant',type:'select',value:'text', options:['text','outlined','contained']},
        {name:'child',type:'text',value:'Our Button'},
        {name:'endIcon',type:'text',value:''},
    ])
    const [code, setCode] = useState('')
    return(
        <>
            <ComponentView component={<ButtonComponent setCode={setCode} fields={fields}/>} name={'Button'} code={code} fields={fields} setFields={setFields}/>
            </>
    )
}