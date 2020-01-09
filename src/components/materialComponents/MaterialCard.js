import React, {useState, useEffect} from 'react'
import {makeStyles, Typography} from "@material-ui/core";
import _ from 'lodash'
import ComponentView from "../ComponentView";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
function CardComponent(props) {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (<>
            <Card raised={props.fields[0].value} className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {props.fields[1].value}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.fields[3].value}
                    subheader={props.fields[4].value}
                    disableTypography={props.fields[2].value}
                />
                <CardMedia
                    className={classes.media}
                    image="/paella.jpeg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.fields[5].value}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default function MaterialCard(props) {
    const [fields, setFields] = useState([
        {name: 'raised', type: 'boolean', value: false},
        {name: 'avatar (card header)', type: 'text', value: 'R'},
        {name: 'disableTypography (card header)', type: 'boolean', value: false},
        {name: 'title (card header}', type: 'text', value: "Shrimp and Chorizo Paella"},
        {name: 'subheader (card header)', type: 'text', value: 'November 14, 2019'},
        {name: 'CardContent', type: 'text', value: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' },


    ])
    return (<>
            <ComponentView fields={fields} setFields={setFields} name="Card" component={<CardComponent fields={fields}/>}/>
        </>
    )
}