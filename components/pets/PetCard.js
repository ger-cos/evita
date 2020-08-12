

/*
import fidel from '../../public/fidel.jpeg'
import luna from '../../public/luna.jpeg'
import evite from '../../public/evite.jpeg'
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';

import PetAvatar from './PetAvatar'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin:0,
        padding:0,
    },
    content:{
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 19,
        paddingLeft: 19,
        display: "flex",
        justifyContent: "center"
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

export default function PetCard({nombre, edad, peso, id, avatar}){
    
    //const [img, setimg] = useState(null)
    /*
    let img
    var fr = new FileReader()
    fr.readAsDataURL(avatar)
    fr.onload = function(e) {
        img = (<img src={this.result}></img>)
    }
    */


const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
setExpanded(!expanded);
};

return (
    <Card className={classes.root}>
        <CardHeader
            /*avatar={
               
            }*/
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title="Gato Fidel"
            subheader="Dueño: "
        />
        <CardContent className={classes.content}>
            <PetAvatar src={avatar} flag={true} >  </PetAvatar>

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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
                Gato Fidel coccion al horno
            </Typography>
            <Typography paragraph>
                Hierva al gato mientras cocina unas mandiocas
            </Typography>
            <Typography paragraph>
                Acompañe al gato fidel con un vino de gate Evite
            </Typography>
            <Typography>
                Se come al pesto
            </Typography>
        </CardContent>
        </Collapse>
    </Card>
);
}
    
   
        /*
        <div key={id}>
                <div>
                    <img src={avatar}></img>
                </div>
                <div className="card-title text-center">
                    <h3>{nombre}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                        {edad}
                    </span>
                </div>
                <div className="card-body">
                    {peso}
                </div>
                <div className="card-footer">
                    <button
                        className="btn btn-danger"
                        >
                        Delete
                    </button>
                </div>
        </div>
        */
    
