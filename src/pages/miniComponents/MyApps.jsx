import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
// Import Swiper styles

const MyApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-code.onrender.com/api/v1/softwareapplication/getall",
        { withCredentials: true }
      );
      setApps(data.softwareApplications);
    };
    getMyApps();
  }, []);
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
        MY Website
      </h1>
      <div>
        {" "}
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/public/Screenshot 2025-06-14 104610.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/public/40fefd16-baa2-4e5b-a2b7-ae90a41609fb.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/public/Screenshot 2025-06-13 104415.png" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default MyApps;
