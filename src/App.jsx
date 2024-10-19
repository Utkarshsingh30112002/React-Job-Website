import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListing from './components/JobListing.jsx'
import ViewAllJobs from './components/ViewAllJobs.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import JobPage,{jobLoader} from './pages/JobPage.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>

    <Route index element={<HomePage />}></Route>
    <Route path='/jobs' element={<JobsPage />}></Route>
    <Route path='/job/:id' element={<JobPage />} loader={jobLoader}></Route>
    <Route path='*' element={<NotFoundPage />}></Route>
  </Route>
)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App