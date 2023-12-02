import React from 'react';
import {addPost} from '../../../types';
import {Link} from 'react-router-dom';

interface Props {
  addPosts: addPost[],
}

const Home: React.FC<Props> = ({addPosts}) => {

  return (
    <div>
      {addPosts.map((elem) => (
        <div className="date border border-3 border-success p-2 ms-4 me-4 rounded-2 mb-3" key={elem.id}>
          {elem.date}
          <h4 className="mt-2">{elem.name}</h4>
          <Link className="btn btn-light border border-dark" to={'/posts/' + elem.id}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;