import { posts } from '.';

// 학습 노트 목록 조회 API
const fetchPosts = () => {
  return posts.get('/');
};

// 학습 노트 상세 조회 API
const fetchViewPost = postId => {
  return posts.get(postId);
};

// 학습 노트 생성 API
const createPosts = postData => {
  return posts.post('/', postData);
};

// 학습 노트 삭제 API
const deletePosts = postId => {
  return posts.delete(postId);
};

// 학습 노트 수정 API

const editPost = (postId, postData) => {
  return posts.put(postId, postData);
};

export { fetchPosts, fetchViewPost, createPosts, deletePosts, editPost };
