import React, {useState, useEffect} from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles, Typography} from "@material-ui/core";
import _ from 'lodash'
import ComponentView from "../ComponentView";


function GridComponent(props) {
    return (<>
            <Grid container spacing={props.fields[5].value} alignItems={props.fields[1].value} direction={props.fields[2].value} justify={props.fields[3].value} spacing={props.fields[4].value}>
                {_.times(props.fields[7].value , i => {
                    return (
                        <Grid item xs={props.fields[5].value}>
                            <Paper style={{minHeight: props.fields[8].value === 'Random' ? props.fields[6].value * Math.random() : props.fields[6].value, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                                <Typography align='center' variant='caption'>Box #{i+1} xs={props.fields[5].value}</Typography>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default function MaterialGrid(props) {
    const [fields, setFields] = useState([
        {name:'alignContent',type:'select',value:'stretch',options:['stretch', 'center', 'flex-start', 'flex-end', 'space-between','space-around']},
        {name:'alignItems',type:'select',value:'stretch',options:['stretch', 'center', 'flex-start', 'flex-end', 'baseline']},
        {name:'direction',type:'select',value:'row',options:['row','row-reverse','column','column-reverse']},
        {name:'justify',type:'select',value:'flex-start', options:['center', 'flex-start', 'flex-end', 'space-between','space-around','space-evenly']},
        {name:'spacing',type:'select',value:0, options:[0,1,2,3,4,5,6,7,8,9,10]},
        {name:'xs',type:'select',value:'auto', options:['auto',true,1,2,3,4,5,6,7,8,9,10,11,12]},
        {name:'minHeight (of paper inside grid items)', type:'number', value: 50},
        {name: 'number of items', type: "number", value: 12},
        {name: 'Heights', type: 'select', value: 'Uniform', options: ['Uniform', 'Random']}
    ])
    return (<>
            <ComponentView fields={fields} setFields={setFields} name="Grid" component={<GridComponent fields={fields}/>}/>
        </>
    )
}