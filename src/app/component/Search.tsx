import React from 'react'

interface SearchProps {
  setSearch: (search: string) => void;
  search: string;
}

interface PagePerProps extends SearchProps {
  setPerpage: (perPage: number) => void;
  perpage: number;
}
function Search({ setPerpage,setSearch,search }: PagePerProps): JSX.Element {
 
  
  return (
    <div className='flex justify-center mt-2'>
      <input type='search' placeholder='Search' onChange={(e)=>setSearch(String(e.target.value).toLocaleLowerCase())} className='bg-[#22111102] text-red-400  rounded-lg border border-solid border-white p-1'  ></input>
      <form>
  <select id="country" className='bg-[#22111102] text-red-400 ml-2 rounded-lg border border-solid border-white p-1' defaultValue={"20"} onChange={(e)=>{setPerpage(Number(e.target.value))}} name="country">
  <option value="10">10</option>
  <option value="15">15</option>
  <option value="20">20</option>
  <option value="50">50</option>
  <option value="100">100</option>
  </select>
</form>
    </div>
  )
}

export default Search