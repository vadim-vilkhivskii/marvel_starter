import { useState } from 'react';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundaru from '../errorBoundary/ErrorBoundary';
import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader />
            <main>
                {/* <ErrorBoundaru>
                    <RandomChar />
                </ErrorBoundaru>
                <div className="char__content">
                    <ErrorBoundaru>
                        <CharList onCharSelected={onCharSelected} />
                    </ErrorBoundaru>
                    <ErrorBoundaru>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundaru>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" /> */}
                <AppBanner/>
                <ComicsList/>
            </main>
        </div>
    )
}

export default App;