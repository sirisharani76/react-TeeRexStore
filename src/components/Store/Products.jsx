import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { borderRadius } from "@mui/system";

const Products = (props) => {
  const { products } = props;
  return (
    <div>
      {products.map((product) => {
        const {
          id,
          name,
          imageURL,
          type,
          price,
          currency,
          color,
          gender,
          quantity,
        } = product;
        return (
          <div>

            <Card sx={{ maxWidth: 345, marginRight: 0.5, my: 5, pt: 3 }} style={{backgroundColor:"yellow"}}>
            <Typography gutterBottom variant="h5" component="div" align="left">
                  {name}
                </Typography>
              <CardMedia
                component="img"
                alt="product"
                height="140"
                image={imageURL}
              />
              <CardContent>
                
                <Typography variant="body2" color="text.secondary">
                  {type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currency}
                  {price} {color} {gender} {quantity}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" >Add to Cart</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
