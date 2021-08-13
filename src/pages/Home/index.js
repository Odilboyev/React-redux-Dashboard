import { Box, Zoom } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeWrapper from './HomeWrapper'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 20,
    },
});

const zoomIn = true;
const Home = () => {
    const classes = useStyles();
    return (

        <HomeWrapper>
            <h1>Cards</h1>
            <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
                <Zoom in={zoomIn} timeout={800}>
                    <Link to="/dashboard/users" color="primary">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Users
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Enter
                                </Button>
                            </CardActions>
                        </Card>
                    </Link>
                </Zoom>
                <Zoom in={zoomIn} timeout={1200} >
                    <Link to="/dashboard/todos" color="primary">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Todos
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Enter
                                </Button>
                            </CardActions>
                        </Card>
                    </Link>
                </Zoom>

                <Zoom in={zoomIn} timeout={1600} >
                    <Link to="/dashboard/albums" color="primary">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Albums
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Enter
                                </Button>
                            </CardActions>
                        </Card>
                    </Link>
                </Zoom>

                <Zoom in={zoomIn} timeout={2000} >
                    <Link to="/dashboard/photos" color="primary">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://images.unsplash.com/photo-1515419682769-91a8a6bdaf68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Photos
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Enter
                                </Button>
                            </CardActions>
                        </Card>
                    </Link>
                </Zoom>
                <Zoom in={zoomIn} timeout={2400} >
                    <Link to="/dashboard/posts" color="primary">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://images.unsplash.com/photo-1496262967815-132206202600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=795&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Posts
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Enter
                                </Button>
                            </CardActions>
                        </Card>
                    </Link>
                </Zoom>
            </Box>




        </HomeWrapper>


    )
}

export default Home