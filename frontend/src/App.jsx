import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer';

function App() {


  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet/>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
