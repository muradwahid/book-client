/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useAppSelector } from '../redux/hook';
import { usePostBookMutation } from '../redux/features/bookApi';

const AddBook = () => {
  const { user } = useAppSelector(state => state.user)
  const [postBook,{error}]=usePostBookMutation()
  const handlePost = (e:any) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publicationDate = form.date.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=684c6274d794de1079ffad375804e558`;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData.data.url, title, user?.email,author,genre,publicationDate)
        if (imgData.success) {
          const postData = {
            title,
            author,
            genre,
            email: user?.email,
            publicationDate,
            image: imgData.data.url,
          }
          postBook(postData)
        }

      })
  }
  console.log(error)
  return (
    <div className='mainContainer mx-auto'>
      <h2 className='text-center'>Add Book</h2>
      <div>
        <form onSubmit={handlePost} >
          <div className='gap-2 my-4'>
            <p><label className='font-semibold'>Title:</label></p>
            <input className='border px-5 rounded-md py-2' type="text" placeholder='enter book title' name='title' />
          </div>
          <div className='gap-2 my-4'>
            <p><label className='font-semibold'>Author:</label></p>
            <input className='border px-5 rounded-md py-2' type="text" placeholder='enter author name' name='author' />
          </div>
          <div className=' gap-2 my-4'>
            <p><label className='font-semibold'>Genre:</label></p>
            <input className='border px-5 rounded-md py-2' type="text" placeholder='enter genre' name='genre' />
          </div>
          <div className=' gap-2 my-4'>
            <p><label className='font-semibold'>Publocation Date:</label></p>
            <input className='border px-5 rounded-md py-2' type="text" placeholder='enter publication date' name='date' />
          </div>
          <div className='flex items-center gap-2 my-4'>
            <label className='font-semibold'>Image:</label>
            <input type="file" name='image' />
          </div>
          <div>
            <input className='btn btn-primary' type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;