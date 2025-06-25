import React from 'react'

const Card = () => {
    return (
        <div>                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src="https://www.shutterstock.com/shutterstock/photos/2532283473/display_1500/stock-photo-veg-momos-or-steamed-momos-with-tomato-chilli-sauce-indian-veg-momo-2532283473.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
                <div className="container w-100 ">
                    <select className="m-2 h-100 bg-success rounded">
                        {Array.from(Array(6), (e, i) => {
                            return <option key={i + 1} value={i + 1}> {i + 1}</option>
                        })}
                    </select>
                    <select className="m-2 h-100 bg-success rounded">
                        <option value="full">Full</option>
                        <option value="half">Half</option>
                    </select>
                    <div className="d-inline h-100 fs-5">
                        Total Price: 100
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Card
