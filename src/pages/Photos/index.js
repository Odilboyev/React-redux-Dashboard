import { Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Slide, Table, TableBody, TableCell, TableHead, TableRow, Typography, Zoom } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setTodos } from '../../redux/actions';
import PhotosWrapper from './PhotosWrapper';


const useStyles = makeStyles({
    root: {
        width: '25%',
        margin: 20,
    },
});
const Photos = () => {
    const { menu } = useParams();
    console.log("userni ichida", menu);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch, 'PHOTOS');
    }, [])

    const data = useSelector(state => state.photos);
    console.log(data);

    return (
        <PhotosWrapper>
            <h1 className="mb-4">Photos</h1>

            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {data.map((v, i) =>
                    <Zoom in={data} timeout={i * 500}  >
                        <Card className={classes.root} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={v.title}
                                    image={v.thumbnailUrl}
                                    title={v.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom color="primary" component="p">
                                        {v.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Zoom>
                )}
            </Box>

        </PhotosWrapper>
    )
}

export default Photos
