import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import img from "../Assets/second-img.jpg";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ProductListPage() {
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Container className="cardGrid" maxWidth="md">
        <div
          style={{
            textAlign: "center",
            marginTop: 10,
            marginBottom: 15,
            padding: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <h3>Filter By: </h3>
            <FormControl style={{ minWidth: 120, marginLeft: 15 }}>
              <InputLabel id="fliter-by-price">Price</InputLabel>
              <Select
                labelId="fliter-by-price"
                id="demo-simple-select"
                value={price}
                onChange={handlePriceChange}
              >
                <MenuItem value="0 - 10K">0 - 10K</MenuItem>
                <MenuItem value="10K - 50K">10K - 50K</MenuItem>
                <MenuItem value="50K - 100K">50K - 100K</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ minWidth: 120, marginLeft: 15 }}>
              <InputLabel id="fliter-by-price">Category</InputLabel>
              <Select
                labelId="fliter-by-price"
                id="demo-simple-select"
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value="Mobiles">Mobiles</MenuItem>
                <MenuItem value="Cloths">Cloths</MenuItem>
                <MenuItem value="Cameras">Cameras</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
          </div>
          <form
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TextField id="search" label="Search Product" variant="outlined" />
            <Avatar
              className="searchIcon"
              style={{
                backgroundColor: "#0984e3",
                marginLeft: 10,
              }}
            >
              <SearchIcon />
            </Avatar>
          </form>
        </div>
        {/* End hero unit */}
        <hr />
        <Grid container style={{ marginTop: 10 }} spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className="card">
                <CardMedia
                  style={{ paddingTop: "56.25%" }}
                  image={img}
                  title="Image title"
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Product Name
                  </Typography>
                  <Typography style={{ marginBottom: 5 }} color="textSecondary">
                    Category
                  </Typography>
                  <Typography>
                    Short description about product details.
                  </Typography>
                  <h5
                    style={{
                      textDecoration: "none",
                      marginTop: 0,
                      marginBottom: 0,
                    }}
                  >
                    {" "}
                    $ 2050
                  </h5>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductListPage;