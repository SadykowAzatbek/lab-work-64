import React, {useState} from 'react';
import {addPost, PostData} from '../../../types';
import axiosApi from '../../axiosApi';
import {useNavigate, useParams} from 'react-router-dom';

interface Props {
  onSubmit: (addPost: addPost) => void;
}

const FormPost: React.FC<Props> = ({onSubmit}) => {
  const [post, setPost] = useState<addPost>({
    id: '',
    name: '',
    text: '',
    date: '',
  });

  const navigate = useNavigate();

  const changePost = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setPost((prevState) => ({
      ...prevState,
    [name]: value,
      id: Math.random().toString(),
      date: Date(),
    }));
  };

  const form = async (event: React.FormEvent) => {
    event.preventDefault();

    const postData: PostData = {
      post,
    };

    try {
      await axiosApi.post('posts.json', postData);
    } catch (err) {
      console.log('404 error ' + err);
    }

    onSubmit(post);

    navigate('/');
  };

  const params = useParams();

  let title = '';

  if (params.id) {
    title = 'Edit';
  } else {
    title = 'Add new post';
  }

  return (
    <div className="ms-auto me-auto w-50">
      <h4>{title}</h4>
      <form onSubmit={form}>
        <input
          required
          name="name" id="name" type="text"
          className="w-100"
          placeholder="Post title"
          value={post.name}
          onChange={changePost}
        />
        <textarea
          required
          name="text" id="text"
          className="w-100 mt-2"
          value={post.text}
          onChange={changePost}
        />
        <button type="submit" className="btn btn-primary">Add post</button>
      </form>
    </div>
  );
};

export default FormPost;