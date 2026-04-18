import React from 'react'
import { useNavigate } from 'react-router-dom'
import Moment from 'moment'

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id, createdAt } = blog
  const navigate = useNavigate()

  const categoryColors = {
    Technology: 'bg-blue-50 text-blue-600 border-blue-200',
    Startup:    'bg-orange-50 text-orange-600 border-orange-200',
    Lifestyle:  'bg-green-50 text-green-600 border-green-200',
    Finance:    'bg-yellow-50 text-yellow-700 border-yellow-200',
    All:        'bg-primary/10 text-primary border-primary/20',
  }

  const colorClass = categoryColors[category] || 'bg-primary/10 text-primary border-primary/20'

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className='card-shine group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-400 cursor-pointer border border-gray-100 hover:border-primary/20 hover:-translate-y-1'
    >
      {/* Image */}
      <div className='relative overflow-hidden aspect-video'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        {/* Category badge over image */}
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${colorClass}`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className='p-5'>
        <h5 className='font-semibold text-gray-800 text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2'>
          {title}
        </h5>
        <p
          className='text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4'
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
        />
        <div className='flex items-center justify-between'>
          <span className='text-xs text-gray-400'>
            {Moment(createdAt).format('MMM D, YYYY')}
          </span>
          <span className='flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all duration-200'>
            Read more
            <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
