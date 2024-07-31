import React from 'react';
import Discounted from '../componants/Discounted';
import Explore from '../componants/Explore';
import Featured from '../componants/Featured';
import Highlights from '../componants/Highlights';
import Landing from '../componants/Landing';



const Home = () => {
  return (
    <>
    <Landing />
    <Highlights />
    <Featured />
    <Discounted />
    <Explore />
    </>
  );
};

export default Home;