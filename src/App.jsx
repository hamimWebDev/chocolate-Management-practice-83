import React from 'react';
import { useLoaderData } from 'react-router-dom';

const App = () => {
  const chocolates = useLoaderData();
  console.log(chocolates);
  return (
    <div>
      hiiii
      <p></p>
    </div>
  );
};

export default App;