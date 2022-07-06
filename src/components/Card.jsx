import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material'
import React, { useState } from 'react'

export const liked = [];

console.log(liked);
const FCArd = ({ Name, key, species,ele, Status, gender, image, addFav }) => {


    const [flag, setFlag] = useState(false)

    //  Button Click Handeler For both buttons

    const btnClickHandeler = () => {
        if (flag === false) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }



    // Handeler having both functionallity of button click handler and add handeler

    const callAddFunc = (para) => {
        btnClickHandeler()
        addFav()
        liked.push(para);
        console.log(liked)
        
    }

    // Remove handeler
    const removeFav = () => {
        alert("Data is removed in Favourites")
    }

    // Handeler having both functionallity of button click handler and Remove handeler
    const callRemoveFunc = (item) => {
        btnClickHandeler()
        removeFav()
        liked.splice(item, 1)
        console.log(liked)
    }
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }} key={key}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image={image}
                            className="mx-4 my-4"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Name:- {Name}<br />
                                Speices:- {species}<br />
                                Status:- {Status}<br />
                                Gender:- {gender}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {!flag ? <Button size="small" style={{ backgroundColor: "skyblue", color: "black" }} onClick={()=>callAddFunc(ele)}>
                                Favourite Toon
                            </Button> :
                                <Button size="small" style={{ backgroundColor: "red", color: "white" }} onClick={()=>callRemoveFunc(key)}>
                                    Remove Favourite Toon
                                </Button>}
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default FCArd;
