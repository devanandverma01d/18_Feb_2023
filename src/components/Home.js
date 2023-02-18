//1. Import area
import { useState } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

//2. Component definition area
//3. Export area
function Home() {
    //1. state/variable
    var name = "Devanand"
    const [surname] = useState("Verma")
    //2. function 
    //3. return statement
    return (
        <>
            <Header />
            <main><h1>Home page</h1>
                <h1>Hello {name} {surname} from App Component</h1>
                <ul class="list-group">
                    <li className="list-group-item">A</li>
                    <li className="list-group-item">B</li>
                    <li className="list-group-item">C</li>
                    <li className="list-group-item">D</li>
                    <li className="list-group-item">E</li>
                </ul>
            </main>
            <Footer />

        </>
    )
}
export default Home;