import  { useState } from "react";
import { data } from "../../Utils/ProductsDetals"; // Adjust path if needed

const Products = ({ headerText }) => {
  const [openCardId, setOpenCardId] = useState(null);
  const [visible, setVisible] = useState(4);

    const handleVisible = ()=>{
      setVisible(pre => pre +2)
    }
  const toggleInfo = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <section className="max-w-[1400px] container mx-auto px-4">
      <h2 className="text-3xl text-center my-5 md:text-4xl font-medium pb-1 lg:leading-14 font-subHeader">
        {headerText}
      </h2>
      <div className="flex flex-wrap gap-5 items-start">
        {data.slice(0, visible).map((item) => {
          const isOpen = openCardId === item.id;

          return (
            <div key={item.id} className="w-full  lg:w-[48%]">
              <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
                <img
                  src={item.beforeImage}
                  alt={item.titleName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col">
                  <h2 className="text-sm text-gray-500 mb-1">Service Name</h2>
                  <h2 className="text-lg font-semibold">{item.titleName}</h2>
                  <button
                    onClick={() => toggleInfo(item.id)}
                    className="mt-2 px-4 py-1 bg-purple-600 text-white rounded text-sm hover:bg-blue-600 transition"
                  >
                    {isOpen ? "Hide Details" : item.btn}
                  </button>

                  {/* Smooth collapsible section */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ease-in-out ${
                      isOpen
                        ? "max-h-[1000px] opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-700">{item.info}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {visible < data.length && (
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={handleVisible}
            className="mt-2 px-4 py-1 bg-secondary text-white rounded text-sm hover:bg-blue-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;

/*
ai code
import React, { useState } from "react";
import { data } from "../../Utils/ProductsDetals"; // adjust the path as needed

const Products = ({ headerText }) => {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleInfo = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <section className="max-w-[1400px] container mx-auto px-4">
      <h2 className="text-3xl text-center my-5 md:text-4xl font-medium pb-1 lg:leading-14 font-subHeader">
        {headerText}
      </h2>
      <div className="flex flex-wrap -mx-2 items-start">
        {data.map((item) => (
          <div key={item.id} className="w-full lg:w-1/2 px-2 mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
              <img
                src={item.beforeImage}
                alt={item.titleName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.titleName}</h2>
                <button
                  onClick={() => toggleInfo(item.id)}
                  className="mt-2 px-4 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition"
                >
                  {openCardId === item.id ? "Hide Details" : item.btn}
                </button>
                {openCardId === item.id && (
                  <p className="mt-3 text-sm text-gray-700">{item.info}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
*/

/*
my code
import React, {  useState } from 'react'
import { data } from '../../Utils/ProductsDetals';
import ProductCard from './ProductCard';


const Products = ({headerText}) => {
  const [visible, setVisible] = useState(4);
  const handleVisible = ()=>{
    setVisible(pre => pre + 3)
  }
  return (
    <div>
      <div className="max-w-[1400px] container mx-auto px-4">
        <h2 className="text-3xl text-center my-5 md:text-4xl font-medium pb-1 lg:leading-14 font-subHeader">
          {headerText}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.slice(0, visible).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
      <button onClick={handleVisible} className="bg-purple-600 py-2 px-3 rounded-sm text-center my-5 text-white">
        Load More
      </button>
    </div>
  );
}

export default Products

*/
