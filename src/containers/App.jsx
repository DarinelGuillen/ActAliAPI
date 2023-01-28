import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "../pages/Login";
import Registration from '../pages/Registration';

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        </Routes>
        </BrowserRouter>
);
}

export default App;