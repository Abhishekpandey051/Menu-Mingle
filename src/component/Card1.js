import React, { useContext, useEffect, useState } from 'react';
import Body from './Body';
import userContext from '../utility/UserContext';


const Card1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleInputChange = (e) => setUserName(e.target.value);
  const {logedInUser,setUserName} = useContext(userContext)
  const handleSubmit = () => {
    alert('Input value: ' + inputValue);
    handleCloseModal();
  };
 useEffect(()=>{
setShowModal(true)
 },[])

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        // onClick={handleOpenModal}
      >
        Open Modal
      </button> */}

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded p-8 m-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Enter Value</h2>
            <input
              className="border border-gray-300 rounded w-full py-2 px-3 mb-4"
              type="text"
              placeholder="Enter value"
              value={logedInUser}
              onChange={handleInputChange}
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card1;
