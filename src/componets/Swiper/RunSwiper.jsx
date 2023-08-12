import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Pagination , EffectFade , Autoplay} from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



const RunSwiper = () => {
  const items = [
    {
      id: "rec1JZlfCIBOPdcT2",
      title: "Samsung Galaxy S8",
      price: "399.99",
      img: "https://www.course-api.com/images/cart/phone-1.png",
      amount: 1,
    },
    {
      id: "recB6qcHPxb62YJ75",
      title: "google pixel",
      price: "499.99",
      img: "https://www.course-api.com/images/cart/phone-2.png",
      amount: 1,
    },
    {
      id: "recdRxBsE14Rr2VuJ",
      title: "Xiaomi Redmi Note 2",
      price: "699.99",
      img: "https://www.course-api.com/images/cart/phone-3.png",
      amount: 1,
    },
    {
      id: "recwTo160XST3PIoW",
      title: "Samsung Galaxy S7",
      price: "599.99 ",
      img: "https://www.course-api.com/images/cart/phone-4.png",
      amount: 1,
    },
  ];
  return (
    <>
      <div className="justify-center items-center flex h-screen max-w-xl mx-auto ">
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        // navigation={true}
        pagination={{
            type : 'progressbar'
        }}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        modules={[Navigation,Pagination , EffectFade , Autoplay]}
        className="h-[500px]  text-white">
          {items.map((item) => (
            <SwiperSlide>
              <div className="shadow-xl rounded-md grid grid-cols-2 bg-black">
                <img src={item.img} className="" alt={item.title} />
                <div className="text-white flex flex-col gap-6">
                    <h1 className="font-bold text-2xl ">{item.title}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sit,
                         esse totam sapiente voluptate sed laborum molestiae error, 
                        aliquid quas non? Eos cumque rem, maxime ducimus beatae quasi illum reprehenderit.
                    </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default RunSwiper;
