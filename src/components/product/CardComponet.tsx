import { Card } from "flowbite-react";
import { CardComponentProps } from "../../types/CartType";



const CardComponent = ({ title, image, price }: CardComponentProps) => {
  return (
    <Card className="max-w-sm rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl bg-white dark:bg-gray-800">
      <img
        className="w-full h-60 object-cover rounded-t-xl"
        src={image}
        alt={title}
      />
      <div className="p-5">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 line-clamp-1">
          {title}
        </h5>
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            className="rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-4 text-sm  font-medium shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;