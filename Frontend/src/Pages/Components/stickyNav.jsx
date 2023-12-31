import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './globalComponents.css';
import { IconButton, Toolbar, AppBar, Stack, Button, styled, Badge, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ToggleSideBar from './toggleSidebar';
import { useState } from 'react';
import Overlay from './overlay';
import LoginForm from './loginForm';
import * as UserServices from './../../Services/UserServices';
import { UseMutationHooks } from '../../Hooks/UseMutationHook';
import jwt_decode from "jwt-decode";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser, updateUser } from '../../Redux/Slides/userSlide';
import { removeProduct } from '../../Redux/Slides/orderSlide';
import QuantityInput from './quantityInput';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 0,
        border: `2px solid 'red'`,
        padding: '0 4px',
    },
}));

export default function StickyNav() {
    const navigate = useNavigate();
    const handleLink = (link) => {
        navigate(`/${link}`);
    }

    // redux
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user)
    const orderSelector = useSelector((state) => state.order)

    // State
    let [toggleCart, setToggleCart] = useState(false);
    const handleToggleCart = () => setToggleCart(!toggleCart);
    let [toggleSearch, setToggleSearch] = useState(false);
    const handleToggleSearch = () => setToggleSearch(!toggleSearch);

    let [toggleLoginForm, setToggleLoginForm] = useState(false);
    const handleToggleLogin = () => setToggleLoginForm(!toggleLoginForm);

    let [toggleAccountOption, setToggleAccountOption] = useState(false);
    const handleToggleAccountOption = () => setToggleAccountOption(!toggleAccountOption);

    const [searchValue, setSearchValue] = useState("")
    // SEARCH HANDLE
    const onSearch = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSearch = (e) => {
        if (searchValue) {
            navigate(`/products?search=${searchValue}`);
        }
    }
    // LOGIN HANDLE

    const [userNameValue, setUserNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const handleUserNameChange = (e) => {
        setUserNameValue(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const mutation = UseMutationHooks(data => UserServices.LoginUser(data))

    const handleSignIn = () => {
        mutation.mutate({
            email: userNameValue,
            password: passwordValue
        })
    }

    const { data, isLoading, isSuccess } = mutation

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('access_token', data?.access_token);
            if (data?.access_token) {
                const decoded = jwt_decode(data?.access_token);
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token);
                }
            }
        }
    }, [isSuccess])

    const handleLogOut = async () => {
        await UserServices.LogOutUser();
        dispatch(resetUser())
        localStorage.removeItem('access_token');
    }

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserServices.GetDetailsUser(id, token);
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    const handleRemoveItemInCart = (id) => {
        dispatch(removeProduct({ productId: id }))
    }

    let isLoggedIn = userSelector.email !== "" ? true : false
    useEffect(() => {
        if (toggleLoginForm === true)
            handleToggleLogin()
        if (toggleAccountOption === true)
            handleToggleAccountOption()
    }, [isLoggedIn])
    return (
        <>
            <div className="nav-container">
                <AppBar position='static' sx={{ backgroundColor: '#fff0', boxShadow: 'none' }}>
                    <Toolbar className="nav-wrapper">
                        <Stack direction='row' spacing={2} sx={{ flexGrow: 1 }}>
                            <ToggleSideBar />
                            <Button color='inherit' sx={{
                                display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem', "&.hover": {
                                    border: 'none',
                                    boxShadow: 'none'
                                }
                            }}>
                                <Typography onClick={() => handleLink("products/0")} sx={{
                                    borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                        color: '#000',
                                    }
                                }}>SẢN PHẨM</Typography>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <Typography onClick={() => handleLink("collections")} sx={{
                                    borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                        color: '#000',
                                    }
                                }}>BỘ SƯU TẬP</Typography>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <Typography onClick={() => handleLink("projects")} sx={{
                                    borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                        color: '#000',
                                    }
                                }}>DỰ ÁN</Typography>
                            </Button>
                            <Button color='inherit' sx={{ display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold', fontSize: '1.5rem' }}>
                                <Typography onClick={() => handleLink("about-us")} sx={{
                                    borderBottom: '1px solid #000', color: '#000', fontFamily: "'Cormorant Garamond', serif", "&:hover": {
                                        color: '#000',
                                    }
                                }}>VỀ CHÚNG TÔI</Typography>
                            </Button>
                        </Stack>
                        <div style={{
                            position: 'absolute', left: '50%', transform: 'translate(-50%)',
                            cursor: 'pointer',
                            color: 'black',
                            '&:hover': {
                                bgcolor: '#ffffff00'
                            }
                        }}>
                            <Typography onClick={() => handleLink("")} variant='h4'>
                                Vision Led
                            </Typography>
                        </div>
                        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                            <div className="right-nav" style={{ position: 'relative' }}>
                                {((toggleLoginForm === true) ? <Overlay func={handleToggleLogin} /> : "") || ((toggleAccountOption === true) ? <Overlay func={handleToggleAccountOption} /> : "")}
                                {(isLoggedIn === false)
                                    ?
                                    <IconButton aria-label="cart" onClick={() => handleToggleLogin()}>
                                        <AccountCircleIcon />
                                    </IconButton>
                                    : <IconButton aria-label="cart" onClick={() => handleToggleAccountOption()}>
                                        <AccountCircleIcon />
                                    </IconButton>}
                                {
                                    (toggleAccountOption === true)
                                        ?
                                        <Box sx={{ position: 'absolute', right: '0', bgcolor: 'white', padding: '10px', width: '200px', borderRadius: '5px', zIndex: "100" }}>
                                            <Typography variant='h6' sx={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                                                <AccountCircleIcon />
                                                <span style={{ margin: '5px', marginBottom: '10px' }}>
                                                    {userSelector.email}
                                                </span>
                                            </Typography>
                                            <Button onClick={handleLogOut} sx={{ width: '100%', color: 'white', backgroundColor: 'black', '&:hover': { backgroundColor: 'white', color: 'black' } }}>log out</Button>
                                        </Box>
                                        : ""
                                }
                                <LoginForm
                                    userNameValue={userNameValue}
                                    handleUserNameChange={handleUserNameChange}
                                    passwordValue={passwordValue}
                                    handlePasswordChange={handlePasswordChange}
                                    handleSignIn={handleSignIn}
                                    data={data}
                                    toggleLoginForm={toggleLoginForm}
                                    handleToggleLogin={handleToggleLogin}
                                />
                            </div>
                            <div className='right-nav' style={{ position: 'relative' }}>
                                <IconButton aria-label="cart" onClick={() => handleToggleCart()}>
                                    <StyledBadge badgeContent={orderSelector.orderItems.length} color="error">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                                {(toggleCart === true) ? <Overlay func={handleToggleCart} /> : ""}
                                {(toggleCart === true) ? <div className="cart-details">
                                    <Box className='cart-content' sx={{ textAlign: 'center' }}>
                                        {
                                            (orderSelector.orderItems.length > 0) ? <Typography variant='h4'>Giỏ hàng</Typography> : ""
                                        }
                                        {
                                            (orderSelector.orderItems.length > 0) ? orderSelector?.orderItems?.map((item, index) => {
                                                return <div className="item-in-cart-wrapper" key={index}>
                                                    <div className="item-in-cart">
                                                        <div className="left">
                                                            <div className="img-item">
                                                                <img src={item.main_image} alt="this is lamp" />
                                                            </div>
                                                            <div className="item-name">
                                                                {item.itemName}
                                                            </div>
                                                            <div className="item-quantity">
                                                                số lượng: {item.quantity}
                                                            </div>
                                                        </div>
                                                        <div className="remove-item" onClick={() => handleRemoveItemInCart(item.productDetails)}>x</div>
                                                    </div>
                                                </div>
                                            }) : <Box sx={{ margin: '50px 0' }}>
                                                <div className="img-empty-cart">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="" />
                                                </div>
                                                <Typography style={{ marginTop: '20px' }} variant='body2'>Không có sản phẩm trong giỏ hàng!</Typography>
                                            </Box>
                                        }
                                        {
                                            (orderSelector.orderItems.length > 0) ? <Button className="to-payment">
                                                Xem chi tiết đơn hàng
                                            </Button> : ""
                                        }
                                    </Box>
                                </div> : ""}
                            </div>
                            <div className={`searchbox ${(toggleSearch === true) ? 'searchbox-active' : ''} ${(toggleSearch === true) ? 'searchbar-active' : ''}`}>
                                {(toggleSearch === true) ? <Overlay func={handleToggleSearch} /> : ""}
                                <div className='right-nav search-ic' onClick={handleToggleSearch}><SearchIcon /></div>
                                <div className="gr-search">
                                    <input className={`searchbar`} type="text" value={searchValue} onChange={onSearch} />
                                    <button className="btn-search" onClick={handleSearch}><SearchIcon /></button>
                                </div>
                            </div>
                        </Stack>
                    </Toolbar>
                </AppBar>

            </div>
        </>
    )
}