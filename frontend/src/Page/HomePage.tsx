
import React, { useState } from 'react'
import CompenyCard from '../Component/Card/CompenyCard'
import AddCompanyForm from '../Component/Form/AddCompanyForm'
import PaginationComponent from '../Component/PaginationComponent'

const HomePage = () => {
  const [companies, setCompanies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (

    <div className='px-36'>
      <h1 className='text-4xl text-center py-5 font-semibold'>Current Hiring Companies Page - {(page - 1) * 3 + " " + (page * 3)} </h1>

      <div className='py-5 space-y-2'>
        {companies.slice((page - 1) * 3, (page * 3)).map((item) => <CompenyCard num={item} />)
          
        }

        <div>
          <PaginationComponent page={page} handleChange={handleChange} totlePage={companies.length / 3} />

        </div>
      </div>


      <div className='py-10'>
        <AddCompanyForm />


      </div>
    </div>
  );
};

export default HomePage;
