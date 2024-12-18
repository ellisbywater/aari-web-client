import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import LandingLayout from './components/layouts/LandingLayout.tsx'
import HomeContent from './components/landing/HomeContent.tsx'
import Login from './components/auth/Login.tsx'
import Register from './components/auth/Register.tsx'
import AppLayout from './components/layouts/AppLayout.tsx'
import AppIndex from './components/app/AppIndex.tsx'
import Portfolios from './components/app/Portfolios.tsx'
import Positions from './components/app/Positions.tsx'
import Account from './components/app/Account.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout/>}>
          <Route index element={<HomeContent/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Register/>} />
        </Route>
        <Route path='app' element={<AppLayout/>}>
          <Route index element={<AppIndex/>}/>
          <Route path='portfolios' element={<Portfolios />} />
          <Route path='positions' element={<Positions/>} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
