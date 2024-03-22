import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const News = () => {
  const [news, setNews] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=software&crypto&apiKey=${apiKey}`
        );

        if (res.status === 200) {
          setNews(res.data.articles);
          console.log(res.data);
        } else {
          console.error("Failed to fetch news");
        }
      } catch (error) {
        console.error("Error fetching news", error);
      }
    };
    fetchNews();
  }, [apiKey]);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h2 className="text-4xl text-gray-400 font-light uppercase tracking-widest mt-24">
        Latest news
      </h2>
      <div className="w-[720px] space-y-10 flex flex-col items-center justify-center mt-20">
        {news
          .filter((article) => article.urlToImage)
          .map((article, index) => (
            <Link
              key={index}
              className="bg-gray-800 hover:opacity-90 hover:scale-105 transition-all w-full flex flex-row justify-start items-start p-5 rounded-lg space-x-4"
              to={article.url}
            >
              <img
                src={article.urlToImage}
                alt="article_img"
                className="w-96 h-64 rounded-xl"
              />
              <div className="flex flex-col gap-y-2">
                <strong>{article.title}</strong>
                {article.description}
                <h1 className="mt-5"> {article.author}</h1>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default News;
