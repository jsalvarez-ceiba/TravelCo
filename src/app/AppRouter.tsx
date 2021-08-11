import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Places from './views/Places/Places';
import New from './views/NewReservation/NewReservation';
import Search from './views/Search/Search';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/places" component={Places} />
        <Route path="/new" component={New} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};
