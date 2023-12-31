import React from 'react'
// import { Link } from "react-router-dom";
import './globalComponents.css';
import { GridMaximize2O } from "lovedicons/dist/gridO";
import { Box, Card, CardContent, CardMedia, Typography, Modal } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const handleLink = () => {
        navigate(`/product-details/${props.index}`)
    }
    const priceDisplay = (props.minPrice !== props.maxPrice) ? props.minPrice + "đ - " + props.maxPrice + "đ" : props.minPrice + "đ"
    const saleRateDisplay = "-" + (props.saleRate * 100) + "%"
    return (
        <>
            <Box sx={{ padding: '10px' }}>
                <Card sx={{ cursor: 'pointer', border: '1px solid #f3f3f3' }} className='card'>
                    <span onClick={handleLink}>
                        <CardMedia alt='unsplash image' component="img" image={props.productImg ? props.productImg : ""} />
                        <Box sx={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            background: '#ef882e',
                            color: 'white',
                            padding: '2px 20px',
                            borderBottomRightRadius: '5px'
                        }}>{saleRateDisplay}</Box>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                sx={{
                                    textAlign: 'center',
                                    color: 'black'
                                }}
                            >{props.productName}</Typography>
                            <Typography variant='body1' sx={{
                                color: 'gray',
                                textAlign: 'center',
                            }}>{priceDisplay}</Typography>
                            <Box className="card-overlay"></Box>
                        </CardContent>
                    </span>
                    <div onClick={handleOpen} className='fastViewDetails'><GridMaximize2O className='iconFastView' /></div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: '#ffffff',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Title
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2, margin: "20px" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non iste laboriosam ullam ab maxime quisquam, possimus totam officiis ratione perspiciatis veritatis unde beatae, nihil incidunt? Quo repellendus cupiditate fugit.
                            </Typography>
                        </Box>
                    </Modal>
                </Card >
            </Box>
        </>
    )
}