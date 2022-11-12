import React, { useState } from 'react';
import BlogList from '../../components/Home/BlogList/blogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar/searchBar';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList/emptyList';


const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    return (
            <div className='flex flex-col items-center p-10'>
                <Header />
                <SearchBar
                    value={searchKey}
                    clearSearch={handleClearSearch}
                    formSubmit={handleSearchBar}
                    handleSearchKey={(e) => setSearchKey(e.target.value)}
                />
                {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
            </div>
    )
}

export default Home;