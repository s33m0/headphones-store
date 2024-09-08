import React from "react";
import obj1 from "../../assets/icons/obj1.png";
import obj2 from "../../assets/icons/obj2.png";
import obj3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

// Services data
const ServicesData = [
  {
    id: 1,
    title: "Security",
    obj: obj1,
    desc: "Enjoy peace of mind with our top-notch security features, designed to protect your data and privacy. Our system ensures robust protection against any threats.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarantee",
    link: "#",
    desc: "Experience unparalleled assurance with our comprehensive guarantee. We stand by the quality and reliability of our products, offering you full confidence in your purchase.",
    obj: obj2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    link: "#",
    desc: "Get the best value for your money with our affordable pricing. Our solutions are designed to be cost-effective without compromising on quality or performance.",
    obj: obj3,
    delay: 1.1,
  },
];

// Animated fade-up effect
const fadeUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});

const ServiceCard = React.memo(({ service }) => {
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 9999,
        followSpeed: 0.5,
        scale: 5,
        rotate: 720,
        mixBlendMode: "darken",
        backgroundElement: (
          <div>
            <img src={service.obj} alt={`${service.title} icon`} />
          </div>
        ),
      }}
    >
      <motion.div
        variants={fadeUp(service.delay)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
      >
        <img
          src={service.obj}
          alt={`${service.title} image`}
          className="w-[100px] mb-4"
          loading="lazy"
        />
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">{service.title}</h1>
          <p className="text-center text-sm text-black/75">{service.desc}</p>
        </div>
      </motion.div>
    </UpdateFollower>
  );
});

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
