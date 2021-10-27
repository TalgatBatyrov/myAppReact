import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';

const App = (props) => {
  // let dialog = [
  //   { name: 'Dimych', id: 1 },
  //   { name: 'Andrey', id: 2 },
  //   { name: 'Sveta', id: 3 },
  //   { name: 'Sasha', id: 4 },
  //   { name: 'Victor', id: 5 },
  //   { name: 'Valera', id: 6 },
  // ]

  // let message = [
  //   { message: 'Hi', id: 1 },
  //   { message: 'How is your IT-Kamasutra', id: 2 },
  //   { message: 'Yo', id: 3 },
  // ]

  // let posts = [
  //   { message: 'HI', likesCount: 10, id: 1 },
  //   { message: 'HEY', likesCount: 15, id: 2 },
  // ]

  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
          <Route path='/dialogs' render={() => <Dialogs message={props.message} dialog={props.dialog} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/setting' component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
