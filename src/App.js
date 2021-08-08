import './App.css';

import Navbar from './Components/Navbar';
import BottomNavBar from './Components/BottomNavBar';
import Main from './pages/main';
import About from './pages/about';
import videoPortefølje from './pages/videoPortefølje';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/video' component={videoPortefølje}></Route>
            </Switch>
            <BottomNavBar></BottomNavBar>
        </Router>
    );
}

export default App;
