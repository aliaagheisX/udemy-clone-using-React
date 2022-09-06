import React from 'react'
import CoursePage from './CoursePage';
import WaitingPage from './WaitingPage';
import Page404 from './Page404';
import Resource from './Resource';

function HomePage() {
  return (
    <Resource
      path="http://localhost:4000/summary"
      render={data => {
        if (data.loading) return <WaitingPage />
        if (data.error) return <Page404 />
        return <CoursePage summary={data.items[0].items[1]} />
      }}
    />
  );
}

export default HomePage;
