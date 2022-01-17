import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import HomeSlider from '../../HomeSlider/HomeSlider';

const NestedRoute = () => {
     let { path, } = useRouteMatch();
     return (
          <>
             <Switch>
               <Route exact path='/home'>
                    <HomeSlider></HomeSlider>
               </Route>
               <Route path={`${path}/offerZone`}>
                    
               </Route>
               <Route path={`${path}/beverage`}>
                    
               </Route>
               <Route path={`${path}/fruitVegetable`}>
                    
               </Route>
               <Route path={`${path}/hotKiteche`}>
                    
               </Route>
               <Route path={`${path}/dairy`}>
                    
               </Route>
               <Route path={`${path}/pastaNoodles`}>
                    
               </Route>
               <Route path={`${path}/frozen`}>
                    
               </Route>
               <Route path={`${path}/baking`}>
                    
               </Route>
               <Route path={`${path}/cheese`}>
                    
               </Route>
               <Route path={`${path}/cleaning`}>
                    
               </Route>
               <Route path={`${path}/cannedFood`}>
                    
               </Route>
               <Route path={`${path}/packingMaterial`}>
                    
               </Route>
               <Route path={`${path}/sauceAndFlavouring`}>
                    
               </Route>
               <Route path={`${path}/snacks`}>
                    
               </Route>
               <Route path={`${path}/beautyAndSkinCare`}>
                    
               </Route>
          </Switch>   
          </>
     );
};

export default NestedRoute;