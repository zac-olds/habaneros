import api from "./apiConfig.js";

// GET ALL POSTS
export const getPosts = async () => {
  try {
    // '/posts' corresponds to our router.get('/posts', controllers.getPosts) from the postRoutes.js file. Will return the data from this endpoint as the response to the get request.
    const resp = await api.get('/posts');
    return resp.data;
  } catch (error) {
    throw error;
  }
}

// GET INDIVIDUAL POST BY ID
export const getPost = async (id) => {
  try {
    // Will return the data from the '/posts/id endpoint as the response to the get request.
    const resp = await api.get(`/posts/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
}

// CREATE NEW POST
export const createPost = async (post) => {
  try {
    // Will post the data pushed to the server contained within the 'post' variable.
    const resp = await api.post('/posts', post);
    return resp.data;
  } catch (error) {
    throw error;
  }
}

// EDIT EXISTING POST
export const updatePost = async (id, post) => {
  try {
    // Will update a current post with new data based on a specific post id.
    const resp = await api.put(`/posts/${id}`, post);
    return resp.data;
  } catch (error) {
    throw error;
  }
}

// DELETE POST
export const deletePost = async (id) => {
  try {
    // Will delete a current post based on a specific post id.
    const resp = await api.delete(`/posts/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
}