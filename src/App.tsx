import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import FormPost from './components/FormPost/FormPost';

function App() {

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
            <div></div>
          )}/>
          <Route path="/new-post" element={(
            <FormPost />
          )} />
        </Routes>
      </main>
    </>
  )
}

export default App;
