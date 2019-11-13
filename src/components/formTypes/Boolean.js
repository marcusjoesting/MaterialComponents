import React from 'react'
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));

export default function Boolean(props) {
    const classes = useStyles()
    return(<>
            <Grid item xs={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel>{props.field.name}</InputLabel>
                    <Select
                        value={props.field.value}
                        onChange={(e) => props.onChangeHandler(e, props.index)}
                    >
                        <MenuItem value={'true'}>true</MenuItem>
                        <MenuItem value={'false'}>false</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}