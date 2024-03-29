import { ref } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      if (!res.ok) {
        throw Error("No data available");
      }
      posts.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  const showpost = ref(true);
  return { posts, error, load, showpost };
};
export default getPosts;
