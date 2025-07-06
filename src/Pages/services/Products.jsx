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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
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