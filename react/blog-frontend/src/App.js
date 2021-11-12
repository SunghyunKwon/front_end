// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <Routes>
      <Route exact element={<PostListPage/>} path='/' />
      <Route exact element={<PostListPage/>} path='/@:username' />
      <Route element={<LoginPage/>} path='/login' />
      <Route element={<RegisterPage/>} path='/register' /> 
      <Route element={<WritePage/>} path='/write' />
      <Route element={<PostPage/>} path='/@:username/:postId' />
    </Routes>
  );
};

export default App;
