import { Route, BrowserRouter, Routes} from "react-router-dom"
import { FirstApp } from "./FirstApp.jsx"
import { CounterApp } from "./CounterApp.jsx"
import { HelloWorldApp } from "./HelloWorldApp.jsx"
import Home from "./Home.jsx"

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/FirstApp" element={<FirstApp/>} />
        <Route path="/CouterApp" element={<CounterApp/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/HelloWorldApp" element={<HelloWorldApp/>} />
    </Routes>
    </BrowserRouter>
  )
}
