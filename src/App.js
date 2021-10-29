import { Route } from 'react-router';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';

const App = (props) => {
  return (
    <div className='appWrapper'>
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/setting' component={Setting} />
      </div>
    </div>
  )
}

export default App;
