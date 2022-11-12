import React from 'react';
import Chip from '../../../common/Chip/chip';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BlogItem = ({
  blog: {
    id,
    title,
    category,
    description,
    authorName,
    authorAvatar,
    createdAt,
    cover,
  } }) => {
  return (
    <div className='bg-[#E3E3E3] w-96'>
      <img src={cover} alt='cover' className='w-96 h-60 rounded-lg' />
      <div className=' p-1'>
        <Chip label={category} />
        <h3 className='font-bold mt-1'>{title}</h3>
        <p className='max-h-12 overflow-hidden '>{description}</p>
        <footer className='flex items-center justify-between'>
          <div className='flex items-center mt-1'>
            <img className='w-12 h-10 rounded-full' src={authorAvatar} />
            <div>
              <h3 className='font-bold'>{authorName}</h3>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link to={`/blog/${id}`}><p>{<FiArrowRight />}</p></Link>

        </footer>
      </div>
    </div>
  )
}
export default BlogItem;