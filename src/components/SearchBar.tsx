import { useState } from 'react';
import Image from 'next/image';

const PATH = {
  search: '/search',
  comics: '/comics',
};


const SearchBar = () => {
  const [valueForm, setValueForm] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valueForm !== '') {
      window.location.href = `${PATH.search}?q=${encodeURIComponent(valueForm.trim())}&page=1`;
    }
    setValueForm('');
  };

  return (
    <div className="w-full">
      <div
        className={`bg-no-repeat bg-cover h-100px sm:bg-[url('/search-bg.webp')] sm:dark:relative sm:dark:after:content-[""] sm:dark:after:absolute sm:dark:after:inset-0 sm:dark:after:bg-gray-900/80`}
      >
        <div className="container h-full">
          <div className="h-full flex items-center justify-center">
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
                    backgroundImage: `url('icon_search.webp')`
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
                style={{ backgroundColor: 'rgb(235, 84, 96)' }}
              >
                <span className='sm:inline-block hidden' >Tìm Kiếm</span>
                <p
                  className='bg-cover bg-no-repeat w-[18px] h-[18px] inline-block sm:hidden'
                  style={{
                    backgroundImage: `url('icon_search.webp')`
                  }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
