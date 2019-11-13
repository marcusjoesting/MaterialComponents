import React from 'react'
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function Number(props) {
    return(
        <>
            <Grid item xs={4}>
                <TextField type='number' label={props.field.name} value={props.field.value} onChange={(e) => props.onChangeHandler(e,props.index)}/>
            </Grid>
        </>
    )
}