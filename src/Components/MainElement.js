import React from "react";
import Button from '@material-ui/core/Button'
import { Container, Grid, Card, CardMedia, Typography,
   CardContent, CardActions} from '@material-ui/core'
   
import  LayerIcon from '@material-ui/icons/Layers'
import  PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

import useStyles from "./usestyles";

const cards =[1,2,3,4,5,6,7,8,9]


function MainElement ()
{
    const  classes = useStyles();

return(
    
    <Container className={classes.cadGrid} maxWidth="md">
    <Grid container spacing={4}>
      {cards.map ((card) =>
      (
        <Grid item key={card} xs={12} sm={6} md={4} >
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="image title">
            </CardMedia>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                Blog post
              </Typography>
              <Typography>
                Image for test
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">View</Button>
              <Button size="small" color="primary">Edit</Button>
              <LayerIcon> </LayerIcon>
              <PlayCircleFilledIcon></PlayCircleFilledIcon>
            </CardActions>
          </Card>
           </Grid>
      )
      )}

    </Grid>

    </Container>
)
}

export default MainElement