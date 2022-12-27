import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './loading/loading';
import './App.css'
const FillForm = lazy(() => import('./components/fillForm'))
const Demo = lazy(()=>import('./components/demo'))
const Revise = lazy(()=>import('./components/revise'))
function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Demo />}></Route>
        <Route path='/form' element={<FillForm />}></Route>
        <Route path='/revise/:companyName' element={<Revise />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
