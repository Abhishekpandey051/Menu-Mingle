import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist"
import {clearCart} from '../App-Store/cartSlice'
const MenuCart = () =>{
    const cartMenu = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()
    const clearBox = () =>{
        dispatch(clearCart())
    }
    return(
        <>
        <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart component</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-blue-500 text-white rounded-lg" onClick={clearBox}>Clear Cart</button>
            {
                cartMenu.length === 0 && <h1>Please add item </h1>
            }
            <Itemlist item={cartMenu}/>
        </div>
        </div>
        </>
    )
}

export default MenuCart