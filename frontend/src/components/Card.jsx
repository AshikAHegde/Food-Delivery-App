import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './Context_Reducer';
const Card = ({ foodName }) => {

    let dispatch = useDispatchCart();
    let data = useCart();

    let options = foodName.options[0];   // options ={ }  //a object
    // console.log(typeof(options))
    let priceoptions = Object.keys(options); // making a array of keys 
    // console.log(priceoptions)
    // console.log(options[priceoptions[0]])

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    useEffect(() => {
        setSize(sizeref.current.value);
    }, []);

    const handelAddtoCart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === foodName._id) {
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodName._id, price: options[size] * qty, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: foodName._id, name: foodName.name, price: options[size] * qty, qty: qty, size: size,img: foodName.img  })
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: foodName._id, name: foodName.name, price: options[size] * qty, qty: qty, size: size, img: foodName.img })
    }

    let finalprice = qty * parseInt(options[size]);
    const sizeref = useRef();
    return (
        <div className="card mt-3" style={{ "width": "100%", "maxWidth": "18rem" }}>
            <img src={`${foodName.img}`} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title text-white">{foodName.name}</h5>
                <p className="card-text text-light" style={{ fontSize: "0.85rem" }}>{foodName.description}</p>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <select className="btn btn-success btn-sm dropdown-toggle"
                        style={{ minWidth: "50px", fontSize: "0.8rem" }}
                        onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return <option key={i + 1} value={i + 1}>{i + 1}</option>
                        })}
                    </select>

                    <select className="btn btn-success btn-sm dropdown-toggle"
                        style={{ minWidth: "70px", fontSize: "0.8rem" }}
                        ref={sizeref}
                        onChange={(e) => setSize(e.target.value)}>
                        {priceoptions.map((data) => {
                            return (
                                <option key={data} value={data}>{data}</option>
                            )
                        })}
                    </select>

                    <div className="text-white fw-bold" style={{ fontSize: "1.1rem" }}>
                        {finalprice}
                    </div>
                </div>
                <hr />
                <button className='btn btn-success ' onClick={handelAddtoCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card


