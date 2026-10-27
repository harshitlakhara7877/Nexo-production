import PostFeed from "@/components/post/PostFeed";
import StoriesRow from "@/components/story/StoriesRow";

const Home = () => {
  return (
    <div className="p-6 mr-80 max-lg:mr-0">
      <h1 className="text-2xl font-bold text-[#1B1C20] dark:text-white">
        Home
      </h1>

      <div className="w-full flex flex-col mx-auto justify-center max-w-2xl mt-6 space-y-6">
        <StoriesRow />
        <PostFeed />
      </div>
    </div>
  );
};

export default Home;
