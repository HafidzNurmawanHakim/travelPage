import React from "react";
import HeroImg from "../Assets/images/heroimg.png";
import { Avatar, AvatarGroup, Button, Chip } from "@nextui-org/react";
import FireOutlined from "../Assets/Icons/Fire";
import StarFilled from "../Assets/Icons/StarFilled";
import SpiralArrow from "../Assets/Icons/SipralArrow";

const Hero = () => {
   return (
      <div id="hero" className="mt-[-64px] h-3/5 m-auto dark:bg-primary text-white">
         <div className="flex xl:flex-row xs:flex-col md:pt-40 xs:pt-20 gap-4 xl:static xs:relative">
            <div className="basis-1/2 pl-6 xl:pl-20 xl:ml-20 h-96">
               <Chip color="warning" variant="solid" className="font-desc">
                  True Adventure Begins Here!
               </Chip>
               <h1 className="xl:text-6xl xs:text-2xl font-heroTitle my-2">
                  <span className="text-warning">Explore</span> the Beauty of the World with Us
               </h1>
               <p className="font-desc xs:text-xs md:text-lg max-w-[600px]">
                  Discover unforgettable adventures and experience the wonders of beautiful
                  destinations worldwide. Join us on a journey full of meaning.
               </p>
               <Button
                  variant="solid"
                  color="warning"
                  className="my-2 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  endContent={<FireOutlined className="text-2xl" />}
               >
                  Join With Us
               </Button>

               <div className="flex xl:flex-row xs:flex-col lg:items-center gap-4 xs:mt-2 relative">
                  <div className="max-w-fit xs:ml-2">
                     <AvatarGroup color="warning" isBordered max={3} total={10}>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                     </AvatarGroup>
                  </div>
                  <div className="ml-4 xs:ml-0">
                     <p className="font-desc text-bold xs:text-sm xs:mt-2">Our Happy Costumers</p>
                     <span className="flex gap-2">
                        <StarFilled className="text-2xl" fill="gold" />
                        4.8 (1.6K Reviews)
                     </span>
                  </div>
                  <SpiralArrow className="text-[140px] lg:left-96 lg:top-[-80px] xs:left-40 xs:top-[-80px] absolute" />
               </div>
            </div>
            <div className="basis-1/2 flex items-center h-96">
               <img
                  src={HeroImg}
                  className="md:w-4/5 xs:w-80 z-10 xs:mt-[-32px] mx-auto xs:pb-[32px]"
                  alt=""
                  style={{ filter: "drop-shadow(10px 20px 40px #2C74B3)" }}
               />
               <div className="w-full h-60 xs:block xl:hidden absolute bottom-10 dark:bg-primary rounded-b-[20%]"></div>
            </div>
         </div>
         <div className="w-full h-60 xs:hidden md:block dark:bg-primary rounded-b-[20%]"></div>
      </div>
   );
};

export default Hero;
