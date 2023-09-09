import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
export default function ProductDetailsContent() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      setQuantity(newValue);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={1} lg={3} md={2}></Grid>
        <Grid item xs={12} lg={6} md={8}>
          <Grid container my={8} spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box p={1}>
                <div className="btn-home">
                  <Link to="/">Trang Chủ </Link>/<span> Collections</span>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{}}>
              <Box p={2}>
                <div className="product-image">
                  <img
                    src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                    alt=""
                    style={{ border: "2px", solid: "#000", width: "100%" }}
                  />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <div className="product-inf-container">
                  <div className="name">
                    <Typography
                      variant="h2"
                      sx={{
                        userSelect: "none",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.6em",
                        width: "25vw",
                      }}
                    >
                      Collections
                    </Typography>
                  </div>
                  <div className="price">
                    <Typography
                      variant="h4"
                      sx={{
                        userSelect: "none",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.5em",
                        width: "100%",
                      }}
                    >
                      $500.00
                    </Typography>
                  </div>
                  <div className="product-options-input">
                    <div className="quantity">
                      <div
                        className="input-quantity"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginTop: "1em",
                          marginBottom: "2em",
                        }}
                      >
                        <div className="number-input-title"></div>
                        <label htmlFor="Quantity">
                          <Typography
                            variant="h4"
                            sx={{
                              userSelect: "none",
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.2em",
                              display: "block",
                            }}
                          >
                            Quantity
                          </Typography>
                          <div
                            style={{
                              display: "inline-block",
                              position: "relative",
                              width: "6em",
                            }}
                          >
                            <input
                              type="number"
                              id="Quantity"
                              value={quantity}
                              onChange={handleInputChange}
                              min={1}
                              max={100}
                              readOnly
                              style={{
                                height: "3em",
                                width: "100%",
                                paddingLeft: "1em",
                                paddingRight: "2em",
                                border: "1px solid #5757",
                                borderRadius: "3px",
                                cursor: "default",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "10%",
                                right: "1.6em",
                                width: "1.5em",
                                height: "2em",
                                backgroundColor: "#ffff",
                                display: "block",
                                cursor: "default",
                              }}
                            ></div>
                            <Box
                              className="quantity-input-spinner-arrows-container"
                              sx={{
                                position: "absolute",
                                top: "10%",
                                right: "0.5em",
                                opacity: "0",
                                "&:hover": {
                                  opacity: "1",
                                },
                              }}
                            >
                              <span
                                onClick={handleIncrease}
                                style={{
                                  backgroundImage:
                                    "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RGVza3RvcCAxOTIwIC8gMTA4MDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtMTkyMC0vLTEwODAiIHN0cm9rZT0iIzEyMTIxMiI+ICAgICAgICAgICAgPGcgaWQ9InF0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDUuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUmVjdGFuZ2xlLTMtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDUuMDAwMDAwKSByb3RhdGUoLTIyNS4wMDAwMDApIHRyYW5zbGF0ZSgtNS4wMDAwMDAsIC01LjAwMDAwMCkgIiBwb2ludHM9IjggOCAyIDggMiAyIj48L3BvbHlsaW5lPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==)",
                                  width: "1em",
                                  height: "1em",
                                  display: "block",
                                  cursor: "pointer",
                                  userSelect: "none",
                                }}
                              ></span>
                              <span
                                onClick={handleDecrease}
                                style={{
                                  backgroundImage:
                                    "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RGVza3RvcCAxOTIwIC8gMTA4MDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtMTkyMC0vLTEwODAiIHN0cm9rZT0iIzEyMTIxMiI+ICAgICAgICAgICAgPGcgaWQ9InF0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDYuMDAwMDAwKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC4wMDAwMDAsIC02LjAwMDAwMCkgdHJhbnNsYXRlKDMuMDAwMDAwLCAxLjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlJlY3RhbmdsZS0zLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA1LjAwMDAwMCkgcm90YXRlKC0yMjUuMDAwMDAwKSB0cmFuc2xhdGUoLTUuMDAwMDAwLCAtNS4wMDAwMDApICIgcG9pbnRzPSI4IDggMiA4IDIgMiI+PC9wb2x5bGluZT4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=)",
                                  width: "1em",
                                  height: "1em",
                                  display: "block",
                                  cursor: "pointer",
                                  userSelect: "none",
                                }}
                              ></span>
                            </Box>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="btn-options" style={{ display: "flex" }}>
                    <Button
                      className="Add-to-bag"
                      color="primary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "1em",
                        color: "white",
                        width: "20em",
                        height: "3.5em",
                        border: "1px solid black",
                        backgroundColor: "rgb(0,0,0)",
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.7)",
                          border: "1px solid black",
                          color: "white",
                          transition: ".3s",
                        },
                      }}
                    >
                      <span>Add To Bag</span>
                    </Button>
                    <button
                      className="add-to-favourite-product"
                      style={{
                        paddingRight: "1em",
                        paddingLeft: "1em",
                        cursor: "pointer",
                      }}
                    >
                      ❤️
                    </button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Typography
                  variant="h4"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                    width: "100%",
                  }}
                >
                  We offer a wide range of products in diverse designs and
                  materials in our collections. Our collections are entirely
                  customizable, allowing you to choose from an array of colors,
                  finishes, and sizes, depending on the product or collection.
                  This customization option enables you to create a personalized
                  fixture by mixing and matching different elements. Since our
                  items are all hand-made, variations in size, color, shape, and
                  texture, such as fissures, bubbles, crackling, and crazing in
                  the glass, are inherent in our glass products.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={1}></Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} lg={3} md={2}></Grid>
      </Grid>
      {/* </div> */}
    </>
  );
}
