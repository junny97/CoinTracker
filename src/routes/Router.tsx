import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CoinDetail from './CoinDetail';
import Coins from './Coins';
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:coinId'>
          <CoinDetail />
        </Route>
        <Route path='/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
