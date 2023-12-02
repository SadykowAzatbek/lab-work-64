import {Link, useParams} from 'react-router-dom';
import {addPost} from '../../../types';
import React from 'react';

interface Props {
  addPosts: addPost[];
}

const MoreInfoPosts: React.FC<Props> = ({addPosts}) => {
  const params = useParams();

  const selectedPost = addPosts.filter((post) => (post.id === params.id))[0];

  return (
    <div>
      <div className="date border border-3 border-success p-2 ms-4 me-4 rounded-2 mb-3">
        {selectedPost.date}
        <h4 className="mt-2">{selectedPost.name}</h4>
        <p>{selectedPost.text}</p>
        <Link to={'/posts/' + params.id + '/edit'} className="btn">edit</Link>
        <button>Delete</button>
      </div>
    </div>
  )
};

export default MoreInfoPosts;