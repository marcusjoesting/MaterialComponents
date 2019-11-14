import React from 'react'
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from '@material-ui/core/styles';

export default function SelectForm(props) {
    return(<>
            <Grid item xs={3}>
                <FormControl fullWidth>
                    <InputLabel>{props.field.name}</InputLabel>
                    <Select
                        value={props.field.value}
                        onChange={(e) => props.onChangeHandler(e, props.index)}
                    >
                        {props.field.options.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}