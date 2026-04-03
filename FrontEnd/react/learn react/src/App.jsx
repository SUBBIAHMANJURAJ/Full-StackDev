// import Counter from './components/Counter'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import Login  from './components/LoginPage';


function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='./' element={<Home/>}/>
        <Route path='./login' element={<LoginPage/>}/>
        <Route path='./profile' element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;