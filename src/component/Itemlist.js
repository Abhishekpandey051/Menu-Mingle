
import React from 'react'
import { CDN_URL } from '../utility/constant';
import { useDispatch } from 'react-redux';
import { addItems } from '../App-Store/cartSlice';

const Itemlist = ({item}) =>{
    const dispatch = useDispatch();

    const handleAddItems = (item) =>{
        dispatch(addItems(item))
    }
    return(
        <>
        {
            item.map(item=>(
                <div key={item?.card?.info?.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                
                <div className='w-9/12'>
                <div className='py-3'>
                <span>{item?.card?.info?.name}</span>
                <span> -₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className='text-xs'>{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4 ">
                <div className='absolute'>
                <button className='p-1 shadow-lg rounded-lg bg-black text-white mx-10 mt-0' onClick={()=>handleAddItems(item)}> Add+ </button>
                </div>
                    <img src={CDN_URL + item?.card?.info?.imageId } alt='item-img' className='w-full rounded-lg'  />
                </div>
                </div>
            ))
        }
        </>
    )
}

export default Itemlist;