import React from 'react';

import HomeHeader from './header/HomeHeader';
import HomeContent from './content/HomeContent';
import HomeContentContainer from './content/HomeContentContainer';
import './Home.css';

const HomePage = (props) => {
   return<section>
      <HomeHeader></HomeHeader>
      <HomeContentContainer></HomeContentContainer>
   </section>;
}

export default HomePage;



