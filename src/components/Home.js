import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    }
}))
export default function Home(props) {
    const classes = useStyles()
    return(
        <Grid container justify='center' spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center' color='secondary'>Material UI Component Builder</Typography>
                    <Typography variant='body2' align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Card className={classes.paper}><Typography color='secondary' variant='h4' align='center'>Material UI</Typography></Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.paper}><Typography color='secondary' variant='h4' align='center'>Give us feedback</Typography></Card>
            </Grid>






        </Grid>


    )
}