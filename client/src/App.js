import React, {Component} from 'react';
import mod from './App.module.sass';
import BackgroundImages from "./components/BackgroundImages/BackgroundImages";
import MainBlock from "./components/MainBlock/MainBlock";

class App extends Component {

    render() {
        return (
            <div className={mod.app}>
                <BackgroundImages/>
                <MainBlock/>
            </div>
        );
    }
}

export default App;
