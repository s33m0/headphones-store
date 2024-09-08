import React from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut,motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';



export const fadeUp=(delay)=>{
  return{
    hidden:{
      opacity: 0,
      y: 20,
    scale: [0.9, 1],
  },
  show:{
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay:delay, ease:easeInOut },
  },
  exit:{
    opacity: 0,
    y: 50,
    scale: 0.5,
    transition: { duration: 0.2, ease: easeInOut },
  },
}
}
const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Experience the freedom of wireless connectivity with our latest headphones. Enjoy crystal-clear sound quality and long-lasting battery life for uninterrupted listening.",
    price: "$100",
    modal: "Model Brown",
    bgColor: "#8b5958",
  },
  {
    
      id: 2,
      image: Headphone2,
      title: "Headphones Wireless 2",
      subtitle:
      "Experience the freedom of wireless connectivity with our latest headphones. Enjoy crystal-clear sound quality and long-lasting battery life for uninterrupted listening.",
      modal: "Model Green",
      price: "$100",
      bgColor: "#638153",
    },
    {
      id: 3,
      image: Headphone3,
      title: "Headphones Wireless 3",
      subtitle:
      "Experience the freedom of wireless connectivity with our latest headphones. Enjoy crystal-clear sound quality and long-lasting battery life for uninterrupted listening.",
        price: "$100",
        modal: "Model blue",
      bgColor: "#5d818c",
    }
];

const Hero = () => {
  const [activeData, setActiveData]= React.useState(
    headphoneData[0]
  );

  const handleActiveData=(data)=>{
    setActiveData(data);
  };
  return(
     <>
  <section className="bg-brandDark text-white font-varela">
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* headphone */}
      <div className="flex flex-col justify-center py-14 md:py-0 lx:max-w-[500px]">
        <div className="space-y-5 text-center md:text-left ">

        <AnimatePresence mode="wait">
          <UpdateFollower
          mouseOptions={{
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 0.5,
            scale: 10,
            mixBlendMode: "difference",
            rotate:-720
          }
          }
          >
            <motion.h1
        key={activeData.id}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={fadeUp(0.2)}
         className="text-3xl lg:text-6xl font-bold font-varela">
          {activeData.title}
        </motion.h1>
          </UpdateFollower>
        
        </AnimatePresence>

        <AnimatePresence mode="wait">
        <motion.p 
         key={activeData.id}
         initial="hidden"
         animate="show"
         exit="exit"
         variants={fadeUp(0.3)}
        className= "text-sm leading-loose text-white/800" >
          {activeData.subtitle}

        </motion.p>
      
         </AnimatePresence >

         <AnimatePresence mode="wait">
         <UpdateFollower
          mouseOptions={{
            backgroundColor: activeData.bgColor,
            zIndex: 9999,
            followSpeed: 0.5,
            scale: 6,
            rotate:-720,
            backgroundElement:(
              <div> 
                  <img src={activeData.image} />

                 </div>
            ),
          }}
         >
           <motion.button
        key={activeData.id}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={fadeUp(0.4)}
        style={{
          backgroundColor: activeData.bgColor
        }}
         className="py-2 px-4 inline-block font-normal rounded-sm">
            {activeData.modal}
        </motion.button>
         </UpdateFollower>
          </AnimatePresence>
        
       
        <div className="flex justify-center items-center md:justify-start gap-4 !mt-20">
          <div className="w-20 h-[1px] bg-white">

          </div>
          <p className="uppercase text-sm">Top Headphones for you</p>
          <div className="w-20 h-[1px] bg-white">

          </div>

        </div>

        <div className="grid grid-cols-3 gap-10">
  {/* Headphone list switcher */}
  {headphoneData.map((item) => {
    return (
      <div
      key={item.id}
      onClick={() => handleActiveData(item)}
       className="grid grid-cols-2 place-items-center cursor-pointer">
        <div>
          <img src={item.image} alt="" className="w-[200px]" />
        </div>
        <div className="space-y-2">
          <p className="text-base font-bold">{item.price}</p>
          <p className="text-xs font-normal text-nowrap">{item.modal}</p>
        </div>
      </div>
    );
  })}
</div>

        {/* <img src={headphoneData[0].image} alt="headphone" className="w-48 h-48 object-cover" /> */}
        </div>
      </div>
     {/* Hero Image */}
<div className="flex flex-col justify-end items-center">
  <AnimatePresence>
    <motion.img
      key={activeData.id}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 50,
        scale: 0.5,
        transition: { duration: 0.4, ease: easeInOut, delay:0.2 },
      }}
      src={activeData.image}
      alt=""
      className="w-[270px] md:w-[350px] xl:w-[470px]"
    />
  </AnimatePresence>
</div>
{/* WhatsApp Icon */}
<div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
  <a href="">
    <FaWhatsapp />
  </a>
</div>


    </div>
  </section>
  
  </>
  );
};

export default Hero;
