import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const Home = () => {

    const [foodcat, setfoodcat] = useState([])
    const [fooditem, setfooditem] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                //body is empty as we are not sending anything to the backend server 
            });
        const result = await response.json()
        setfooditem(result[0]);
        setfoodcat(result[1]);
    }




    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousel />
            </div>
            <div className='container'>
                {
                    foodcat.length !== 0 ?
                        foodcat.map((data) => {
                            return (
                                <div className='row mb-3' >
                                    <div key={data._id} className='fs-3 m-3'>
                                        {data.CategoryName}
                                    </div>
                                    {
                                        fooditem.length !== 0 ?
                                            fooditem
                                                .filter((item) => item.CategoryName === data.CategoryName)
                                                .map((filtered_item) => (
                                                    <div key={filtered_item._id} className='col-12 col-md-6 col-lg-3'>
                                                        <Card foodName = {filtered_item}/>
                                                    </div>
                                                ))
                                            : <div className='col-12'>No Items in this Category</div>
                                    }
                                </div>)
                        })
                        : <>
                            No Items to Show
                        </>
                }

            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
