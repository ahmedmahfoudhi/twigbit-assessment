
const ProductCard = ({ name, price, description }: ProductProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
