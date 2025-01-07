import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './Home'
import Res from './Res'
import Menu from './Menu'



export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/res" element={<Res />} />
        <Route path="/menu" element={<Menu />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
