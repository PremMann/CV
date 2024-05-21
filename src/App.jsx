import React, {useState} from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [dark, setDark] = useState();

  const [active, setActive] = useState('');
  const navItems = ['Home', 'About', 'Portfolio', 'Contact'];
  const iconMap = {
    Home: faHome,
    About: faUser,
    Portfolio: faBriefcase,
    Contact: faEnvelope,
  };


  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
}
  return (
    <>
      <div className='absolute right-2.5 top-4'>
        <div className="flex items-center justify-center w-full my-8">
          <label for="toggle" className="flex items-center cursor-pointer">
            <input type="checkbox" id="toggle" className="sr-only peer" onChange={darkModeHandler}/>
            <div className="block relative bg-blue-900 w-16 h-9 p-1 rounded-full before:absolute before:bg-blue-600 before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
          </label>
        </div>
      </div>

      <nav className='z-50 fixed top-0 left-0 w-full bg-white shadow-md bg-gradient-to-t from-slate-50 to-orange-50 dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-900'>
        <ol className='hidden md:flex justify-center'>
          {navItems.map((item, index) => (
            <li key={index} className={`p-2.5 hover:!text-white hover:bg-[#e65101] cursor-pointer ${active === item.toLowerCase() ? 'text-[#e65101]' : ''}`} onClick={()=> {setActive(item.toLowerCase())}}>
              <Link className={`hover:!text-white p-1`} to={`/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <nav className='flex h-full items-center z-50 fixed top-0 right-0 max-[360px]:hidden md:hidden pr-2.5'>
        <ol className='flex flex-col md:hidden justify-end dark:bg-red-500 gap-2'>
          {navItems.map((item, index) => (
            <li key={index} title={item} className={`px-3 py-2 hover:!text-white  rounded-xl  shadow-inner hover:bg-[#e65101] text-center cursor-pointer ${active === item.toLowerCase() ? 'text-white bg-[#e65101]' : 'bg-white'}`} onClick={()=> {setActive(item.toLowerCase())}}>
              <Link className="hover:text-white " to={`/${item.toLowerCase()}`}>
                <FontAwesomeIcon icon={iconMap[item]} />
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <nav className='hidden max-[360px]:flex min-[360px]:hidden w-full fixed inset-x-0 bottom-0  z-50 md:hidden shadow-inner'>
        <ol className='flex flex-row md:hidden w-full justify-center bg-white shadow-md gap-2'>
          {navItems.map((item, index) => (
            <li key={index} title={item} className={`px-3 py-2 hover:!text-white hover:bg-[#e65101] rounded-xl shadow-inner text-center cursor-pointer ${active === item.toLowerCase() ? 'text-white bg-[#e65101]' : ''}`} onClick={()=> {setActive(item.toLowerCase())}}>
              <Link className="hover:text-white text-[#541600]" to={`/${item.toLowerCase()}`}>
                <FontAwesomeIcon icon={iconMap[item]} />
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <div className='h-full bg-gradient-to-t from-slate-50 to-orange-50 dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-900'>
        <Routes className='z-0'>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/work' element={<Work />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
      
    </>
    
  );
}

export default App;