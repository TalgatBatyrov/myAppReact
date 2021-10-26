import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';

const App = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;
