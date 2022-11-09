import { useContext } from "react";
import { BrowserRouter ,Routes ,Route, Link } from "react-router-dom";
import ProfileEdit from './pages/ProfileEdit';
import Header from './components/Header';
import Footer from './components/Footer';
import { Context } from "./context/Context";
function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
    <div className='flex flex-col justify-between h-screen'>
      <Header/>
      <Routes>        
         <Route path="/" element={<Home />} />
         <Route path="register" element={<Register />} />
         <Route path="login" element={<Login />} />
         <Route path="profile/:userId" element={user ? <Profile /> : <Home/>} /> /profile/Transfer/s=124214
         <Route path="profile/update/:userId" element={user ? <ProfileEdit/> : <Home />} />
         <Route path="*" 
              element={
                        <div className='shadow-lg grid place-self-center mt-20 py-20 w-3/4 mx-auto text-white  justify-center text-center'>
                          <p className='text-7xl pt-3 m-3'>😮404😮</p>
                          <p className='text-lg  m-2'>There's nothing here!</p>
                          <Link className='btn btn-accent text-2xl' to="/">🏡Home</Link>
                        </div>
              }/>
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
