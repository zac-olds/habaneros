import React, { useState, useEffect } from "react"
import "./PostDetail.css" 
import Layout from "../../components/shared/Layout/layout"
import { getPost, deletePost } from "../../services/posts"
import { useParams, Link } from "react-router-dom"

const PostDetail = () => {
  const [ post, setPost ] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams() 

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post) 
      setLoaded(true)


    }
fetchPost()
  }, [id])
  if (!isLoaded) {
    return <h1>Loading ...</h1>
  }
  return (
    <Layout>
      <div className = "postDetail">
        <img className="postDetailImg" src={post.imgURL} alt={post.name} />
        <div className="details">
          <div className="name"> {post.name}
            <div className="content">{post.content}
              <div className="buttons">
                <button className="deleteButton" onClick = { () => deletePost(post.id)}>delete</button>
                <button className="editButton" ><Link className ="editLink" to = {`/posts/${post.id}/edit`}>edit</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>

  </Layout>
)
}
export default PostDetail
