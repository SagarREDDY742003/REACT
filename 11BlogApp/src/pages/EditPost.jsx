/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import appwriteServices from '../appwrite/config';
import Container from '../Components/Container/Container';
import PostForm from '../Components/Post-Form/PostForm';

function EditPost() {
  const [post, setPost] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(slug){
      appwriteServices.getPost(slug).then((post) => {
        if(post){
          setPost(post);
        }
        else{
          navigate("/")
        }
      })
    }
  }, [slug,navigate])

  return (
    <div className='py-6'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  )
}

export default EditPost