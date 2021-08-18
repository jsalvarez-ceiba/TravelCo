import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../app/feature/Home/pages/Home';
import Navbar from './feature/Navbar/components/Navbar/Navbar';
import NewReservation from './feature/NewReservation/pages/NewReservation';
import Places from './feature/Places/pages/Places';
import Search from './feature/Search/pages/Search';

export const AppRouter : React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/places" component={Places} />
        <Route path="/new" component={NewReservation} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};
