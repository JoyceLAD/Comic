import Image from 'next/image'
import {createSearchParams, useNavigate } from 'react-router-dom'
import { Key, useState } from 'react'
import { useQuery } from 'react-query'

const PATH ={
    search: '/search',
    comics: '/comics',
}
const iconSearch = <Image
  src="/icon_search.webp"
  alt=''
  width={5}
  height={5}
/>
const SearchBar= () => {
    // State cho giá trị của ô tìm kiếm và trạng thái của dropdown suggest
    const [valueForm, setValueForm] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()
  
    // Sử dụng React Query để thực hiện truy vấn tìm kiếm đề xuất
    const { data: dataSuggest, isLoading } = useQuery({
      queryKey: ['search-suggest', { q: valueForm }],
      
      enabled: valueForm !== '',
      staleTime: 3 * 60 * 1000
    })

    // Xử lý khi người dùng submit form tìm kiếm
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (valueForm !== '') {
        navigate({
          pathname: PATH.search,
          search: createSearchParams({
            q: valueForm.trim(),
            page: '1'
          }).toString()
        })
      }
      setValueForm('')
    }
  
    return (
      <div className='w-full'>
        <div
          className={`bg-no-repeat bg-cover h-[100px] sm:bg-[url('/search-bg.webp')] sm:dark:relative sm:dark:after:content-[""] sm:dark:after:absolute sm:dark:after:inset-0 sm:dark:after:bg-gray-900/80`}
        >
          <div className='container h-full'>
            <div className='h-full flex items-center justify-center'>
              <form
                className='z-10 relative flex items-center dark:text-white w-[320px] sm:w-auto'
                onSubmit={(e) => {
                  handleSearch(e)
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                }}
              >
                <div className='flex-shrink-0 bg-white py-4 pl-[18px] pr-[14px] dark:bg-gray-900 hidden sm:block'>
                  <p
                    className='bg-cover bg-no-repeat w-[18px] h-[18px]'
                    style={{
                      backgroundImage: `url(${iconSearch})`
                    }}
                  />
                </div>
                <input
                  onFocus={() => setIsOpen(true)}
                  onBlur={() => setIsOpen(false)}
                  onChange={(e) => setValueForm(e.target.value)}
                  value={valueForm}
                  type='text'
                  placeholder='Tìm kiếm...'
                  className='h-[36px] sm:h-[50px] leading-[50px] pr-4 pl-4 sm:pl-0 w-full sm:w-[320px] lg:w-[420px] outline-none dark:bg-gray-900'
                />
                <button
                  title='Tìm Kiếm'
                  className='text-white capitalize flex items-center justify-center bg-gray-700 sm:bg-gradient h-[36px] sm:h-[50px] w-[50px] sm:w-[100px] lg:w-[140px]'
                >
                  <span className='sm:inline-block hidden'>Tìm Kiếm</span>
                  <p
                    className='bg-cover bg-no-repeat w-[18px] h-[18px] inline-block sm:hidden'
                    style={{
                      backgroundImage: `url(${iconSearch})`
                    }}
                  />
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default SearchBar;