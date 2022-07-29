import React, { useRef, useState } from 'react'
import CompenyCard from '../Component/Card/CompenyCard'
import PaginationComponent from '../Component/PaginationComponent';

const Compney = () => {
  const [companies, setCompanies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  const [page, setPage] = React.useState(1);
   const cardRef = useRef<HTMLDivElement>(null);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    cardRef.current?.focus()
  };
 
  return (
    <div>
      <h1
        className='py-5 text-center text-3xl font-semibold'
        ref={cardRef}>
        All The Upcoming Companies On This Week
      </h1>
      <div
      
      className='px-36 py-5 space-y-2'>

      {companies.slice((page - 1) * 5, page * 5).map((item) => <CompenyCard num={item} />)}

      <div>
        <PaginationComponent page={page} handleChange={handleChange} totlePage={companies.length / 5} />
      </div>

    </div>
    </div>
    
  )
}

export default Compney
