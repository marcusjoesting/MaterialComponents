import React from 'react'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import deepPurple from '@material-ui/core/colors/deepPurple'
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import cyan from '@material-ui/core/colors/cyan'
import teal from '@material-ui/core/colors/teal'
import green from '@material-ui/core/colors/green'
import lightGreen from '@material-ui/core/colors/lightGreen'
import lime from '@material-ui/core/colors/lime'
import yellow from '@material-ui/core/colors/yellow'
import amber from '@material-ui/core/colors/amber'
import orange from '@material-ui/core/colors/orange'
import deepOrange from '@material-ui/core/colors/deepOrange'
import brown from '@material-ui/core/colors/brown'
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey'
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {Container, makeStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import _ from 'lodash'
const useStyles = makeStyles(theme => ({
    color: {
        '&:hover': {
            border: '2px solid black',
            cursor: 'pointer'
        }
    }
}))

const colors = [red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime,  yellow, amber, orange, deepOrange, brown, grey, blueGrey]


export default function ColorPicker(props) {
    const classes = useStyles()
    return(
        <Container maxWidth='xs'>
        <Grid container spacing={0} justify='center'>
            {colors.map((color) => {
                return _.times(9, (i) => {
                    return (
                        <Tooltip title={color[(i+1) *100]}>
                        <Avatar onClick={() => props.setColor({main: color[(i+1) * 100]})}  className={classes.color} variant='square' style={{backgroundColor: color[(i+1)*100], width: 25, height: 25}}/>
                        </Tooltip>
                    )
                })
            })}
        </Grid>
        </Container>

    )
}