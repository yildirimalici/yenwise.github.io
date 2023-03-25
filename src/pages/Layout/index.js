import {
    Routes,
    Route
} from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorPage from '../ErrorPage';
import Home from '../Home';
import HowItWorks from '../HowItWorks';

function App() {
    return (
        <>
            <div className='fw-light'>
                <Header />
                <div className=''>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/how-it-works' element={<HowItWorks />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
