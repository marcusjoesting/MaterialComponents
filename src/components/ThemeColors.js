import React from 'react'
import ColorPicker from "./ColorPicker";
import Grid from "@material-ui/core/Grid";
import {makeStyles, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles(theme => ({
   paper: {
       padding: theme.spacing(2),
       margin: theme.spacing(2)
   },

}))

export default function ThemeColors(props) {
    const classes = useStyles()
    return(
        <Grid container justify='center' spacing={2}>
            <Paper className={classes.paper}>
            <Typography align='center' variant='h6' color='primary'>Theme's primary color</Typography>
            <Grid item xs={12}>
            <ColorPicker setColor={props.setPrimaryColor}/>
            </Grid>
            <Typography align='center' variant='h6' color='secondary'>Theme's secondary color</Typography>
            <Grid item xs={12}>
                <ColorPicker setColor={props.setSecondaryColor}/>
            </Grid>
                <Grid item xs={4}>
                <Typography color='error' variant={"caption"}>Warning: Some theme color combinations will not please your eyeballs as much as others. Choose wisely.</Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}