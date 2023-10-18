import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks'
import Flex from './components/Flex/Flex'
import { useState } from 'react';

function App() {

  return (
    <main>
      <Header></Header>
      <div className="container">
        <Tasks></Tasks>
        {/* <Flex></Flex> */}
      </div>
    </main>
  );
}

export default App;
