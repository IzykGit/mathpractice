
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Practice from "./pages/Practice"
import GetStarted from "./pages/GetStarted"


const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/practice" element={<Practice />}/>
                <Route path="/get-started" element={<GetStarted />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
