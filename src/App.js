// import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import Blog from './routes/Blog/blog.component';
import ContactUs from './routes/ContactUs/contact_us.component';
import SignUp from './routes/signup/signup.component';
import AboutUs from  './routes/aboutus/aboutus.component';
import FAQ from './routes/faq/faq.component';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={
          <div className="App">
            <Home/>
                             
                           
         </div>}/>
         <Route path="blog" element={ <div className="some-container"><Blog/></div>}/>
         <Route path="contact" element={<h1><ContactUs/></h1>}/>
         <Route path="about-us" element={<AboutUs/>}/>
         <Route path="faq" element={<FAQ/>}/>
         <Route path="sign-in" element={<SignUp/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
