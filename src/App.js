import { Route } from 'react-router';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';

const App = (props) => {

  console.log(props.store);
  console.log(props.store);
  debugger;


  return (
    <div className='appWrapper'>
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Route path='/profile' render={() => <Profile store={props.store} />} />
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/setting' component={Setting} />
      </div>
    </div>
  )
}

export default App;
