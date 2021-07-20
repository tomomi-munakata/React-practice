import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import m from '../images/m.jpg'


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 320,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
          </Typography> 
        <CardMedia
          className={classes.media}

        image={m}
          title="profile"
        />
        <CardContent>
           <Typography variant="body2" color="textSecondary" component="p">
             <p>
               　　　　　　　　　　　　　　　　　　　　　　　
            </p>    
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
