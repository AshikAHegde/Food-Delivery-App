import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const Home = () => {

    const [search, setSearch] = useState("")
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
            {/* <Carousel />  no we are not using this */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption " style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => {
                                setSearch(e.target.value)
                            }} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />"
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/1460788317/photo/south-indian-vegetarian-breakfast.webp?s=1024x1024&w=is&k=20&c=XL0YoeDn7EOGC-2vR9s5JozSAB58yZl9ZeQn9wisTcI=" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='container'>
                {
                    foodcat.length !== 0 ?
                        foodcat.map((data) => {
                            return (
                                <div>
                                <div className='row mb-3' >
                                    <div key={data._id} className='fs-3 m-3'>
                                        {data.CategoryName}
                                    </div>
                                    {
                                        fooditem.length !== 0 ?
                                            fooditem
                                                .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
                                                .map((filtered_item) => (
                                                    <div key={filtered_item._id} className='col-12 col-md-6 col-lg-3'>
                                                        <Card foodName={filtered_item} />
                                                    </div>
                                                ))
                                            : <div className='col-12'>No Items in this Category</div>
                                    }
                                </div>
                                    <hr />
                                </div>
                                )
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
