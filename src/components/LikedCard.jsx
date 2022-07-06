import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'

const LikedCard = ({ele}) => {
  return (
    <div>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  component="img"
                  alt="green iguana"
                  height="240"
                  image={ele.image}
                  className="mx-4 my-4"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      Name:-{ele.name} <br />
                      Speices:- {ele.species}<br />
                      Status:-{ele.status} <br />
                      Gender:-{ele.gender}
                  </Typography>
              </CardContent>
          </Card>
      </Grid>
  </Grid>
    </div>
  )
}

export default LikedCard

