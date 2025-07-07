/*
ata use hocche na.. karon Products a sob kora hoiche
import { HiArrowLongRight } from "react-icons/hi2";
import { useCollapse } from "react-collapsed";
import { useState } from "react";
const ProductCard = ({ p }) => {
  console.log(p.info)
  const { getCollapseProps, getToggleProps } = useCollapse();
  const [isExpanded, setExpanded] =  useState(false)
  return (
    <div className="bg-white shadow-sm rounded-md min-h-24 transition-transform hover:scale-[1.02]">
      <img
        src={p.beforeImage}
        alt={p.titleName}
        className="w-full h-56 object-cover"
        //  className="w-full h-56 bg-cover bg-center"
      />
      <div className="p-2">
        <h2 className="text-sm text-gray-500 mb-1">Service Name</h2>
        <p className="font-semibold text-xl text-gray-800 mb-3">
          {p.titleName}
        </p>

        {isExpanded ? (
          <button
            {...getToggleProps()} 
            onClick={()=>setExpanded(pre => !pre)}
            className="collapse-title font-semibold w-full py-2 flex items-center justify-center gap-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            Hide Details
            <HiArrowLongRight className="text-lg" />
          </button>
        ) : (
          <button
            {...getToggleProps()}
            className="collapse-title font-semibold w-full py-2 flex items-center justify-center gap-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            {p.btn}
            <HiArrowLongRight className="text-lg" />
          </button>
        )}
        <section {...getCollapseProps()}>
          <p>{p.info}</p>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;

*/