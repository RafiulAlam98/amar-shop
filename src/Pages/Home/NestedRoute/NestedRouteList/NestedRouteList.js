import React from 'react';
import {  Link, useRouteMatch } from 'react-router-dom';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

const NestedRouteList = () => {
     let { url } = useRouteMatch();
     return (
          <>
              <List>
                    <Link exact to="/home" style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Home
                         </Button>
                    </Link>
                    <Link to={`${url}/offerZone`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Offer Zone
                         </Button>
                    </Link>
                    <Link to={`${url}/beverage`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Beverage
                         </Button>
                    </Link>
                    <Link to={`${url}/fruitVegetable`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Fruit and Vegetable
                         </Button>
                    </Link>
                    <Link to={`${url}/hotKiteche`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Hot Kitchen
                         </Button>
                    </Link>
                    <Link to={`${url}/dairy`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Dairy
                         </Button>
                    </Link>
                    <Link to={`${url}/pastaNoodles`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Pasta and Noodles
                         </Button>
                    </Link>
                    <Link to={`${url}/frozen`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Frozen
                         </Button>
                    </Link>
                    <Link to={`${url}/baking`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Baking
                         </Button>
                    </Link>
                    <Link to={`${url}/cheese`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Cheese
                         </Button>
                    </Link>
                    <Link to={`${url}/cleaning`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Cleaning
                         </Button>
                    </Link>
                    <Link to={`${url}/cannedFood`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Canned Food
                         </Button>
                    </Link>
                    <Link to={`${url}/packingMaterial`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Packing Material
                         </Button>
                    </Link>
                    <Link to={`${url}/sauceAndFlavouring`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Sauce And Flavouring
                         </Button>
                    </Link>
                    <Link to={`${url}/snacks`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Snacks
                         </Button>
                    </Link>
                    <Link to={`${url}/beautyAndSkinCare`} style={{ textDecoration: 'none' }}>
                         <Button color="inherit" sx={{ mb: 2 }}>
                              Beauty And Skin Care
                         </Button>
                    </Link>
               </List>  
          </>
     );
};

export default NestedRouteList;