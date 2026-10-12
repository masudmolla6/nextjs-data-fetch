// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (error) {
//     throw new Error("Faild to fetch posts");
//   }
// };

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!res.ok){
    throw new Error("faild to fetch posts");
  }
  return res.json();
};

const PostPage = async () => {
  // const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts=await res.json();

  const posts = await getPosts();
  return (
    <div>
      <h2>All Post here. {posts.length}</h2>
    </div>
  );
};

export default PostPage;
