import React from 'react'
import CoursePage from './CoursePage';
import WaitingPage from './WaitingPage';
import Page404 from './Page404';
import Resource from './Resource';
import Navbar from './components/Navbar';
import Header from './components/Home/Header';
import CategoryContainer from './components/Home/CategoryContainer';

function HomePage() {
  return (
    <Resource
      path="http://localhost:4000/summary"
      render={data => {
        if (data.loading) return <WaitingPage />
        if (data.error) return <Page404 />
        return (
          <>
            <Navbar />
            {/* <Header />
            <CategoryContainer data={data.items} /> */}
            <CoursePage summary={data.items[0].items[0]} />
          </>
        )
      }}
    />
  );
}

export default HomePage;
