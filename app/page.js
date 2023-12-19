"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    <section>
      <h1>Use router</h1>
      <button
        className="h-fit w-fit bg-blue-600 rounded-lg m-2 p-2"
        onClick={() => navigate("about")}
      >
        About Page
      </button>
      <button
        className="h-fit w-fit bg-blue-600 rounded-lg m-2 p-2"
        onClick={() => navigate("login")}
      >
        Login Page
      </button>
    </section>
  );
};

export default Home;
