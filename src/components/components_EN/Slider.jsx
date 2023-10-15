/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Claudio from "/img/Testimonials/claudio.png";

const Slider = () => {
    return (
        <div className='max-w-[440px] h-fit z-[990]'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={450}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="w-[437px] h-fit bg-[#151517] p-8 cursor-pointer border-2 border-[#313134] rounded-[12px]">
                        <div className="flex items-center justify-start gap-3">
                            <img src={Claudio} alt="Claudio Fiandesio" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[14px] font-bold">Claudio Fiandesio</p>
                                <p className="text-[14px] text-[#A1A1A9]">COO at SocialSnack</p>
                            </div>
                        </div>
                        <p className="text-[15px] text-[#A1A1A9] pt-4">
                            “As the COO of Social Snack from Aleph group, I've been working with Infinix since 2013. Their performance as a technology partner has been exceptional, and I continue to recommend and use Infinix for our technological needs.”
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[437px] h-fit bg-[#151517] cursor-pointer p-8 border-2 border-[#313134] rounded-[12px]">
                        <div className="flex items-center justify-start gap-3">
                            <img src={Claudio} alt="Claudio Fiandesio" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[14px] font-bold">Claudio Fiandesio</p>
                                <p className="text-[14px] text-[#A1A1A9]">COO at SocialSnack</p>
                            </div>
                        </div>
                        <p className="text-[15px] text-[#A1A1A9] pt-4">
                            “As the COO of Social Snack from Aleph group, I've been working with Infinix since 2013. Their performance as a technology partner has been exceptional, and I continue to recommend and use Infinix for our technological needs.”
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[437px] h-fit bg-[#151517] p-8 border-2 border-[#313134] rounded-[12px]">
                        <div className="flex items-center justify-start gap-3">
                            <img src={Claudio} alt="Claudio Fiandesio" />
                            <div className="flex flex-col gap-1">
                                <p className="text-[14px] font-bold">Claudio Fiandesio</p>
                                <p className="text-[14px] text-[#A1A1A9]">COO at SocialSnack</p>
                            </div>
                        </div>
                        <p className="text-[15px] text-[#A1A1A9] pt-4">
                            “As the COO of Social Snack from Aleph group, I've been working with Infinix since 2013. Their performance as a technology partner has been exceptional, and I continue to recommend and use Infinix for our technological needs.”
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
