/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import appwriteService from "../appwrite/config";
import Button from "../Components/Button";
import Container from '../Components/Container/Container';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

function Post() {
  const [post, setPost] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if(slug){
      appwriteService.getPost(slug).then((post) => {
        if(post){
          setPost(post)
        }
        else{
          navigate("/")
        }
      })
    }
  })

  const deletePost =() => {
    appwriteService.deletePost(post.$id).then((status) => {
      if(status){
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    })
  }
  return post ? (
    <div className='py-8'>
      <Container>
        <div className='w-full flex-col mb-4 '>
          <div className=' w-3/4 flex-col justify-center border rounded-xl p-2 bg-white'>
            <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl' />
          
          { isAuthor && (
            <div className='flex justify-center w-auto top-6 mt-2'>
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="mr-3" bgColor="bg-green-500">Edit</Button>
              </Link>
              <Button onClick={deletePost} bgColor="bg-red-500">Delete</Button>
            </div>
          )}
        </div>
        </div>
        <div className='w-full mb-6'>
          <h1 className='text-2xl font-bold'>{post.title}</h1>
          <div className='browser-css'>
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null
}

export default Post