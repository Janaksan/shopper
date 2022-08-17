import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component'
import Navication from './components/navication/navication.component';
import SignIn from './routes/sign-in/sign-in.component';

function App() {

  const Shop = () => (
    <h1>Shop</h1>
  )

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navication />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
