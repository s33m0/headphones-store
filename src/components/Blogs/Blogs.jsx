import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";

const BlogsData = [
  {
    id: 1,
    title: "Pain itself is love, consectetur (in connection with) elite advertising.",
    desc: "Pain itself is love, connecting with elite advertising. Just minimal accusatory injustice is avoided by you at any, but accusing yourself, opening who incident!",
    link: "#",
    img: Blogs1,
  },
  {
    id: 2,
    title: "Pain itself is love, consectetur (in connection with) elite advertising.",
    desc: "Pain itself is love, connecting with elite advertising. Just minimal accusatory injustice is avoided by you at any, but accusing yourself, opening who incident!",
    link: "#",
    img: Blogs2,
  },
  {
    id: 3,
    title: "Pain itself is love, consectetur (in connection with) elite advertising.",
    desc: "Pain itself is love, connecting with elite advertising. Just minimal accusatory injustice is avoided by you at any, but accusing yourself, opening who incident!",
    link: "#",
    img: Blogs3,
  },
  {
    id: 4,
    title: "Pain itself is love, consectetur (in connection with) elite advertising.",
    desc: "Pain itself is love, connecting with elite advertising. Just minimal accusatory injustice is avoided by you at any, but accusing yourself, opening who incident!",
    link: "#",
    img: Blogs4,
  }
];

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 999,
                  followSpeed: 1.5,
                  text: "read",
                  textFontSize: "3px",
                  scale: 5,
                }}
              >
                <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                  <img src={data.img} alt="" />
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold line-clamp-1">
                      {data.title}
                    </h1>
                    <p className="text-sm text-black/75 line-clamp-3">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
