import { HiArrowLongRight } from "react-icons/hi2";

const ProductCard = ({ p }) => {
  return (
    <div className="bg-white shadow-sm rounded-md  transition-transform hover:scale-[1.02]">
      <img
        src={p.beforeImage}
        alt={p.titleName}
        className="w-full h-56 object-cover"
      //  className="w-full h-56 bg-cover bg-center"
      />
      <div className="p-4">
        <h2 className="text-sm text-gray-500 mb-1">Service Name</h2>
        <p className="font-semibold text-xl text-gray-800 mb-3">
          {p.titleName}
        </p>
        <button className="w-full py-2 flex items-center justify-center gap-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors">
          {p.btn}
          <HiArrowLongRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
