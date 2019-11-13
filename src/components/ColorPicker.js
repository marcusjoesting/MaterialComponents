import React from 'react'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import cyan from '@material-ui/core/colors/cyan'
import teal from '@material-ui/core/colors/teal'
import green from '@material-ui/core/colors/green'
import yellow from '@material-ui/core/colors/yellow'
import orange from '@material-ui/core/colors/orange'
import brown from '@material-ui/core/colors/brown'
import grey from '@material-ui/core/colors/grey'
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {Container, makeStyles} from "@material-ui/core";
import _ from 'lodash'
const useStyles = makeStyles(theme => ({
    color: {
        '&:hover': {
            border: '1px solid black',
            cursor: 'pointer'
        }
    }
}))

const colors = [red, pink, purple, indigo, blue, cyan, teal, green, yellow, orange, brown, grey]


export default function ColorPicker(props) {
    const classes = useStyles()
    return(
        <Container maxWidth='xs'>
        <Grid container spacing={0}>
            {colors.map((color) => {
                return _.times(9, (i) => {
                    return <Avatar onClick={() => props.setColor({main: color[(i+1) * 100]})}  className={classes.color} variant='square' style={{backgroundColor: color[(i+1)*100], width: 25, height: 25}}/>
                })
            })}
        </Grid>
        </Container>

    )
}