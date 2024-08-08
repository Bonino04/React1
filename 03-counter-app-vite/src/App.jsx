import { Route, BrowserRouter, Routes} from "react-router-dom"
import { FirstApp } from "./FirstApp"
import { CounterApp } from "./CounterApp"
import Home from "./Home"

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/firstApp" element={<FirstApp/>} />
        <Route path="/couterApp" element={<CounterApp/>} />
        <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}
