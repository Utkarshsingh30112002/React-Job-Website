import { useState,useEffect } from 'react'
import SingleJobListing from './SingleJobListing.jsx'
import Spinner from './Spinner.jsx'

const JobListing = ({isHome}) => {
    let [jobs,setJobs]=useState([])
    let [isloading,setIsLoading]=useState(false);
    let url=isHome?'/api/jobs?_limit=3':'/api/jobs'
    useEffect(()=>{
          setIsLoading(true)
          async function fetchData(){
          try{
            let rel=await fetch(url,);
            let data=await rel.json();
            setJobs(data);
        }catch(error){
            console.log('error while fetching data',error)
        }finally{
            setIsLoading(false)
        }
    }
        fetchData();
    },[])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome?'Recent Jobs':'Browse Jobs'}
        </h2>
            {isloading
              ?(<Spinner isLoading={isloading}/>)
              :(
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <>{jobs.map((job)=>(<SingleJobListing key={job.id} job={job}/>))} </>
                </div>
              )
            }
      </div>
    </section>
  )
}

export default JobListing