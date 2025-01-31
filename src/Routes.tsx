import { Routes as RouterRoutes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SillyPage } from './pages/SillyPage'
import { CrazyPage } from './pages/CrazyPage'

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/silly" element={<SillyPage />} />
    <Route path="/crazy" element={<CrazyPage />} />
  </RouterRoutes>
)

export default Routes