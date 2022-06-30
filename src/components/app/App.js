import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundaru from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <ErrorBoundaru>
                        <RandomChar />
                    </ErrorBoundaru>
                    <div className="char__content">
                        <ErrorBoundaru>
                        <CharList onCharSelected={this.onCharSelected} />
                        </ErrorBoundaru>
                        <ErrorBoundaru>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErrorBoundaru>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;