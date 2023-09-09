/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../../redux/features/bookApi';

const RecentlyAddedBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined, undefined)
  return (
    <div>
      <h2 className='text-2xl font-bold my-6'>Recently added</h2>
      <div className='grid grid-cols-4 gap-6'>
        {isLoading && <div>
          <p>Loading...</p>
        </div>}
        {
          data?.data?.map((book:any) => <div>
            <img src={book?.image} alt="" />
            <h4 className='mt-4 text-xl text-gray-600 font-semibold'><Link to={`/book/${book?._id}`}>{book?.title}</Link></h4>
          </div>)
        }
      </div>
    </div>
  );
};

export default RecentlyAddedBooks;