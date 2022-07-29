import React, { useState } from 'react'
import CompenyCard from '../Component/Card/CompenyCard'
import AddCompanyForm from '../Component/Form/AddCompanyForm'

const HomePage = () => {
  const [companies,setCompanies]=useState([1,2,3,4,5,6,7,8,9])
  return (
    <div className='px-36'>
      <h1 className='text-4xl text-center py-5 font-semibold'>Current Hiring Companies</h1>

      <div className='py-5 space-y-2'>
        {companies.map((item) => <CompenyCard />)}
      </div>

      <div className='py-10'>
        <AddCompanyForm/>
      </div>

    </div>
  )
}

export default HomePage
