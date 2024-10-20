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
import AddJobPage from './pages/AddJobPage.jsx'
import EditJobPage from './pages/EditJobPage.jsx'



const App = () => {
  //add job
  async function addJob(newJob){
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob)
    });
    return;
  }

  //deleteJob

  async function deleteJob(jobId){
    const res=await fetch(`/api/jobs/${jobId}`,{
      method:'DELETE'
    })
  }
  
  //updateJob
  async function updateJob(job){
    const res=await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job)
    });
    return;
  }
  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
  
      <Route index element={<HomePage />}></Route>
      <Route path='/jobs' element={<JobsPage />}></Route>
      <Route path='/add-job' element={<AddJobPage onSubmitForm={addJob}/>}></Route>
      <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} ></Route>
      <Route path='/edit-job/:id' element={<EditJobPage updatedJobSubmit={updateJob}/>} loader={jobLoader} ></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Route>
  )
  );

  return <RouterProvider router={router}/>
}

export default App