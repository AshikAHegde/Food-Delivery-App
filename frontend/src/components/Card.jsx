import React from 'react'

const Card = ({ foodName }) => {

    let options = foodName.options[0];   // options ={ }  //a object
    // console.log(typeof(options))
    let priceoptions = Object.keys(options); // making a array of keys 
    // console.log(priceoptions)
    return (
        <div className="card mt-3 p-2" style={{ "width": "18rem", "maxHeight": "360px" }}>
            <img src={`${foodName.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{foodName.name}</h5>
                <p className="card-text">{foodName.description}</p>
                <div className="container w-100 ">
                    <select className="m-2 h-100 bg-success rounded">
                        {Array.from(Array(6), (e, i) => {
                            return <option key={i + 1} value={i + 1}> {i + 1}</option>
                        })}
                    </select>

                    <select className="m-2 h-100 bg-success rounded">
                        {priceoptions.map((data) => {
                            return (
                                <option value={data}> {data} </option>
                            )
                        })}
                    </select>

                    <div className="d-inline h-100 fs-5 ">
                        {/* {foodName.options[0]
                        } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card


