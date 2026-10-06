import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(){
    const[cartList, setCartList] = useState([]);
    useEffect(()=>{
        const fetchCart = async()=>{
            const carts = await axios.get("https://fakestoreapi.com/carts");
            console.log(carts.data);
            const cartData = await carts.data;
            setCartList(cartData);
        };
        fetchCart();
    }, []);
    return(
        <div>
            <h1>Hare Krishna</h1>
            {cartList.map((curCart)=>{
                return(
                    <ul className="list-group w-50 m-1 " key={curCart.id} >
                    <li className="list-group-item">Id : {curCart.id}</li>
                    <li className="list-group-item">UserId : {curCart.userId}</li>
                    <li className="list-group-item">Date : {curCart.date}</li>
                    <li className="list-group-item">
                        <p>ProductId : {curCart.products[0].productId}</p>
                        <p>Quantity : {curCart.products[0].quantity}</p>
                        
                    </li>
                    </ul>
                );
            })}
        </div>
    );
}
