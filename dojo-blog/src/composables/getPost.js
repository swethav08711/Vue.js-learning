import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts/" + id);
      if (!res.ok) {
        throw Error("No post data available");
      }
      post.value = await res.json();
      console.log(res, "result");
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
