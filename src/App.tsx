import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import FormPost from './components/FormPost/FormPost';
import {useState} from 'react';
import {addPost} from '../types';

function App() {
  const [addPosts, setAddPosts] = useState<addPost[]>([]);

  const addPost = (post: addPost) => {
    setAddPosts((prevState) => ([...prevState, post]));
  }

  return (
    <>
      <header className="d-flex justify-content-between p-3 rounded-3 mt-3">
        <h1>My blog</h1>
        <nav className="pt-3">
          <ul className="navbar-nav ms-auto flex-row gap-2 flex-nowrap">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/new-post">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={(
            <div>
              {addPosts.map((elem) => (
                <div className="date border border-3 border-success p-2 ms-4 me-4 rounded-2 mb-3" key={Math.random()}>
                  {elem.date}
                  <h4 className="mt-2">{elem.name}</h4>
                  <button className="btn btn-light border border-dark">Read more</button>
                </div>
              ))}
            </div>
          )}/>
          <Route path="/new-post" element={(
            <FormPost onSubmit={addPost}/>
          )} />
        </Routes>
      </main>
    </>
  )
}

export default App;
