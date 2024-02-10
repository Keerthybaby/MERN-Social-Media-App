import axios from 'axios';

const url='http://localhost:5000/posts';

export const fetchPost=(id)=>axios.get(`/posts/${id}`);
export const fetchPosts=(page)=>axios.get(`/posts?page=${page}`);
export const fetchPostsBySearch=(searchQuery)=>axios.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost=(newPost)=>axios.post(url,newPost);
export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost);
export const deletePost=(id)=>axios.delete(`${url}/${id}`);
export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`);