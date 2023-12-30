import React from 'react'
import Banner  from '@/components/Banner'
import CardItem from '@/components/CardItem'
import SearchBar from '@/components/SearchBar'

const HomePage = () => {


    return(
        <>
            <div>
                <SearchBar/>
                <Banner/>
                
            </div>
        </>
    )
}
export default HomePage;