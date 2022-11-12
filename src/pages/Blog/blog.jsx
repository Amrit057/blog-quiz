import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from '../../config/data';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import EmptyList from '../../components/common/EmptyList/emptyList';
import Chip from '../../components/common/Chip/chip';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find(blog => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [])

  return (
    <div>
      <Link to='/' className='flex flex-row items-center w-fit'><AiOutlineArrowLeft />Go Back</Link>

      {blog ? 
      <div className='flex flex-col items-center mb-2'>
        <p className='text-sm'>Published on: {blog.createdAt}</p>
        <h1 className='font-bold text-3xl'>{blog.title}</h1>
        <div className='flex gap-6 mb-4'>
          {blog.subCategory.map((category, index) => (<div><Chip key={index} label={category} /></div>))}
        </div>
        <img src={blog.cover} alt='cover' className='w-2/5 mb-4' />
        <p className='w-3/5 text-center'>{blog.description}</p>
      </div>
        : <EmptyList />}
    </div>


  )
}

export default Blog