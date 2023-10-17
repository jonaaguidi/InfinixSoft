/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Testimonials } from "../../constants/index_EN";


const ActiveSlider = () => {
  return (
    <div className="max-w-[500px] flex items-center justify-center">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {Testimonials.map((item) => (
          <SwiperSlide className="w-[600px]" key={item.name}>
            <div className="w-[437px] h-fit bg-[#151517] p-8 cursor-pointer border-2 border-[#313134] rounded-[12px] mx-20">
              <div className="flex items-center justify-start gap-3">
                <img src="/img/Testimonials/claudio.png" alt="Claudio Fiandesio" />
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold">{item.name}</p>
                  <p className="text-[14px] text-[#A1A1A9]">{item.position}</p>
                </div>
              </div>
              <p className="text-[15px] text-[#A1A1A9] pt-4">
                {item.content}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default ActiveSlider;
