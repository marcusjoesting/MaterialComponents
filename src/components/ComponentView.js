import Grid from "@material-ui/core/Grid";
import {Button, makeStyles, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ComponentForm from "./ComponentForm";
import React from "react";
import TextField from "@material-ui/core/TextField";
import CodeIcon from '@material-ui/icons/Code';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import jsxToString from 'jsx-to-string'
const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        width: '100%',
    },
    paper3: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        minWidth: 400,
        minHeight: 400
    },
    title: {
        margin: theme.spacing(2),
    },
    paper2: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        justifyContent: 'center',
        display: 'flex',
        width: '100%'
    },
    code: {
        margin: theme.spacing(2),
        padding:theme.spacing(2),
        width: '100%'
    }
}))

export default function ComponentView(props) {
    const classes = useStyles()
    const [copied, setCopied] = React.useState(false)
    React.useEffect(() => {
        setCopied(false)
    },[props.code])
    return (
        <Grid container spacing={2} justify='center' alignItems='center'>
            <Grid item xs={12}>
                <Typography align='left' color='secondary' className={classes.title} variant='h4'>{props.name} Component</Typography>
            </Grid>
            <Paper elevation={5} className={classes.paper}>
            <div className={classes.paper3}>
                <Grid container justify='center'>
                    {props.component}
                </Grid>
            </div>
            </Paper>
            <Paper elevation={5} className={classes.paper2}>
                <Grid item xs={12}>
                    <ComponentForm fields={props.fields} setFields={props.setFields} name={props.name}/>
                </Grid>
            </Paper>
            <Paper elevation={5} className={classes.code}>
                <Typography color='secondary' variant='button'>{props.name} code</Typography>
                <Tooltip title='Copy code' placement='bottom'>
                    <CopyToClipboard onCopy={() => setCopied(true)} text={props.code}>
                        <IconButton style={{float:'right'}}>
                            <CodeIcon color='secondary'/>
                        </IconButton>
                    </CopyToClipboard>
                </Tooltip>
                <TextField fullWidth value={props.code}/>
                {copied && <Typography variant='caption' color='secondary' align='right'>Code Copied</Typography>}
            </Paper>
        </Grid>
    )
}

