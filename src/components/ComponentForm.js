import React, {useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Text from './formTypes/Text'
import Boolean from './formTypes/Boolean'
import SelectForm from './formTypes/Select'
import Number from './formTypes/Number'
import _ from 'lodash'

export default function ComponentForm(props) {

    const onChange = (e, index) => {
        let holder = [...props.fields]
        if (holder[index].type === 'boolean'){
            holder[index].value = (e.target.value === 'true')
        }
        else if(holder[index].type === 'number') {
            holder[index].value = +e.target.value
        }
        else {
            holder[index].value = e.target.value
        }
        props.setFields(holder)
    }



    return(

            <Grid container spacing={1} justify='space-evenly'>

                {props.fields.map((field, index) => {
                        if (field.type === 'text') {
                            return <Text key={field.name} field={field} index={index} onChangeHandler={onChange}/>
                        } else if (field.type === 'select') {
                            return <SelectForm key={field.name} field={field} index={index} options={field.options}
                                           onChangeHandler={onChange}/>
                        } else if (field.type === 'boolean') {
                            return <Boolean key={field.name} field={field} index={index} onChangeHandler={onChange}/>
                        } else if (field.type === 'number') {
                            return <Number key={field.name} field={field} index={index} onChangeHandler={onChange}/>
                        }
                    }
                )
                }
            </Grid>
    )
}