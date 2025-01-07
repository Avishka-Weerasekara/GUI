import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Res from './pages/Res/Res'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/res" element={<Res />} />
        <Route path="/place-order" element={<PlaceOrder />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
