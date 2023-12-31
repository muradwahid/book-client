/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Puff } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { useGetCommnetQuery, usePostCommnetMutation, useSingleBookQuery } from '../redux/features/bookApi';
import { useAppSelector } from '../redux/hook';

const SingleBook = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  const { user } = useAppSelector(state => state.user)
  const { data: commentData, } = useGetCommnetQuery(id, { refetchOnMountOrArgChange: true });
  const [postComment] = usePostCommnetMutation()
  const handleReview = (event: any) => {
    event.preventDefault();
    const from = event.target
    const review = from.review.value;
    const data = {
      review: review,
      author: id
    }
    postComment(data)
    from.reset()
  }
  if (isLoading) {
    return <div className='h-[70vh] w-full flex items-center justify-center'>
      <div>
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  }
  return (
    <div className='mainContainer mx-auto'>
      <div className='mt-6 text-lg font-semibold'>
        <p className='underline'>Home | <span className='text-yellow-600'>Book</span></p>
      </div>
      <div className='mt-10 flex gap-10' >
        <div>
          <img src={data?.data?.image} alt="" />
        </div>
        <div>
          <h3 className='text-lg text-gray-900 font-semibold'>{data?.data?.title}</h3>
          <p><span className='text-yellow-600'>Author:</span> {data?.data?.author}</p>
          <p><span className='text-yellow-600'>Genre:</span> {data?.data?.genre}</p>
          {
            user?.email === data?.data?.email && <div className='mt-4 flex gap-3'>
              <button className='bg-yellow-500 px-4 py-1 text-gray-200 rounded-md'>Edit Book</button>
              <button className='bg-red-500 px-4 py-1 text-gray-200 rounded-md'>Delete Book</button>
            </div>
          }
        </div>
      </div>
      <div>
        <p className='text-lg font-semibold mt-10 mb-6'>Reviews</p>
        <form onSubmit={handleReview} action="" method="post">
          <div className='flex gap-4'>
            <label htmlFor="review font-semibold">Review:</label>
            <textarea className='border' name="review" id="review"></textarea>
          </div>
          <input type="submit" className='bg-yellow-600 px-5 py-2 text-white rounded-sm mt-6 cursor-pointer' value="Submit" />
        </form>
        <div className='mt-10'>
          {
            commentData?.data?.review.map((data: string, idx: number) => <div key={idx}>
              <p className='my-2 font-medium text-gray-700'>{data}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default SingleBook;