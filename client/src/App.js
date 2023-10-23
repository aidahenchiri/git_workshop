import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Login  from './Component/Login';
import  Register  from './Component/Register';
import  Home  from './Component/Home';
import  Profile  from './Component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Component/Loading';
import { useSelector } from 'react-redux';
import MovieList from './Component/Movie/MovieList';
import Detail from './Component/Movie/Detail';
import NavbarMovie from './Component/Movie/NavbarMovie';
import Favorite from './Component/Movie/FavoriteListe';
import FavoriteListe from './Component/Movie/FavoriteListe';



function App() {
  const load=useSelector((state)=>state.userReducer.load  )
  const loadfilm=useSelector((state)=>state.MovieReducer.load  )
console.log(loadfilm)
  return (
    <div className="App">

<Routes>
<Route path="/" element={<Home />}/> 

<Route path="/Profile"  element={load?<Loading />:<Profile /> }/> 
<Route path="/Login" element={<Login />}/> 
 <Route path="/Register" element={<Register />}/>
 <Route path="/MovieList" element={loadfilm?<Loading />:<MovieList />}/>
 <Route path="/Details/:_id" element={<Detail />}/>
 <Route path="/favorite" element={<FavoriteListe />}/>

</Routes>
    </div>
  );
}

export default App;
