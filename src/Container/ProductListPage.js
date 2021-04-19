import React, { useState, useEffect } from "react";
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
import { db } from "../Config";
import { Modal, Carousel } from "react-bootstrap";

// import img from "../Assets/second-img.jpg";
import "./ProductListPage.css";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function ProductListPage() {
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
    features: [],
  });
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClose = () => setShow(false);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleShow = (item) => {
    let docRef = db.collection("products").doc(item.key);

    let newModalData;

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          // setModalData({
          //   ...doc.data(),
          //   features: [],
          // });
          newModalData = { ...doc.data(), features: [] };
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    docRef
      .collection("features")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setModalData({ ...newModalData, features: doc.data()["list1"] });
        });
      });

    setShow(true);
  };

  useEffect(() => {
    // read data
    if (cardData.length <= 0) {
      setLoading(true);
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          let newData = [];
          querySnapshot.forEach((doc) => {
            newData.push({ key: doc.id, ...doc.data() });
          });
          setCardData(newData);
          setLoading(false);
        });
    }
  }, [cardData]);

  return (
    <div>
      <Container className="cardGrid" maxWidth="md">
        <div className="fliterSection">
          <div className="innerFilter">
            <h3>Filter By: </h3>
            <FormControl className="filterForm">
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
            <FormControl className="filterForm">
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
          <form className="searchForm">
            <TextField id="search" label="Search Product" variant="outlined" />
            <Avatar className="searchIcon">
              <SearchIcon />
            </Avatar>
          </form>
        </div>
        <hr />
        <Grid container className="listContainer" spacing={4}>
          {loading ? (
            <div>
              <h1>Loading...</h1>
            </div>
          ) : (
            <>
              {cardData.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className="card">
                    <CardMedia
                      style={{ paddingTop: "56%" }}
                      image={item.image}
                      title={item.name}
                      onClick={() => {
                        handleShow(item);
                      }}
                    />
                    <CardContent className="cardContent">
                      <Typography
                        gutterBottom
                        variant="h5"
                        onClick={() => {
                          handleShow(item);
                        }}
                        component="h2"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        style={{ marginBottom: 5 }}
                        color="textSecondary"
                      >
                        {item.category}
                      </Typography>
                      <Typography>{item.description}</Typography>
                      <h5 className="cardPrice">$ {item.price}</h5>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
      <Modal
        show={show}
        animation={true}
        centered={true}
        size="lg"
        className="mt-5"
        onHide={() => handleClose()}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {/* {modalData.images.map((item, index) => {
                return ( */}
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={modalData.image}
                  alt="First slide"
                />
              </Carousel.Item>
              {/* );
              })} */}
            </Carousel>
            <hr />
            <h5>Description: - </h5>
            <p>{modalData.description}</p>
            <hr />
            <h5>Price: - </h5>
            <p>{modalData.price}</p>
            <hr />
            <h5>Specail Feature: - </h5>
            <ul>
              {modalData.features.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <hr />
          </Container>
        </Modal.Body>
        <Modal.Footer className="mb-5"></Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductListPage;
