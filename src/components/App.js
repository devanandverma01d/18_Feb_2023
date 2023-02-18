//1. Import area

import Home from "./Home";
import './App.css';
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

//2. Component definition area
function App() {
    //1.State/Variable

    //2.Function
    //3.return statement

    // every function return something
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>

    )
}
//3. Export area
export default App;
