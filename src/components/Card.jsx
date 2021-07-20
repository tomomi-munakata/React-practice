import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 350,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
            WORK
          </Typography>
        <CardMedia
          className={classes.media}
        //   image="/static/images/cards/contemplative-reptile.jpg"
        image="img/work-sample.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           <p> 
             PORTFOLIO(このサイト)
           </p>　
           <p>
             Design/Cording
          </p>　
          <p>
             1ページで全ての情報が得られるようにしました。
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
