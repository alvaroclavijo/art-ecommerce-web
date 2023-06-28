import React from 'react'
import DayPicture from '../../components/DayPicture';
import { Photographs } from '../../components/Photographs';

const Home = () => {
  return (
    <>
      <DayPicture />
        <hr className='dividing-line' />
      <Photographs />
    </>
  )
}

export default Home;