import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const NewsCard = ({news}) => {
const {author, title, image_url, details, rating, total_view}=news

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-4 space-y-4 bg-white">
    {/* Author Information */}
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img
          src={author.img}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold">{author.name}</h3>
          <p className="text-xs text-gray-400">{author.published_date}</p>
        </div>
      </div>
      <FaShareAlt className="text-gray-500 cursor-pointer" />
    </div>

    {/* Title */}
    <h2 className="text-lg font-semibold">{title}</h2>

    {/* Image */}
    <img src={image_url} alt="News" className="w-full rounded-lg" />

    {/* Details */}
    <p className="text-sm text-gray-600 line-clamp-3">
      {details}
    
    </p>
    <Link 
    to={`/news/${news._id}`}
    className="text-blue-500 cursor-pointer"> Read More</Link>

    {/* Rating and Views */}
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <span className="text-sm font-semibold">{rating.number}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaEye className="text-gray-400" />
        <span className="text-sm text-gray-600">{total_view}</span>
      </div>
    </div>
  </div>
  )
}
