import { useState } from "react";
import React, { useState } from "react"
import "/Postcreate.css" 
import Layout from "../../components/shared/Layout/Layout"
import { Redirect } from "react-router-dom"
import { createPost } from "../../services/posts"

const PostCreate = (props) => {
  const [post, setPost] = useState({
    name: "",
    imgURL: "",
    content: ""
  })
  const [isCreate, setCreate] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value

    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createPost(post)
    setCreate({created})
  }
  if (isCreate) {
    return <Redirect to={`/posts`}/>
  }
  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          value={post.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
          
        />
        <input
        className="image-input"
        placeholder="Image Link"
        value={post.imgURL}
        name="imgURL"
        required
        onChange={handleChange}
        
        />

      <textarea
        className="content-input"
        rows = {10}
        placeholder="Content"
        value={post.content}
        name="content"
        required
        onChange={handleChange}
        />
        <button type="Submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  )
}
export default PostCreate