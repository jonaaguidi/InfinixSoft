/* eslint-disable react/no-unescaped-entities */
import Slider from "./Slider";

const Testimonials = () => {
    return (
        <section className="max-w-[1220px] mx-auto bg-transparent py-20 pb-60 px-28 flex flex-col items-start justify-center max-[1000px]:px-14 max-[425px]:px-7">
            <div className="flex gap-10">
                <div className="max-w-[820px] flex flex-col justify-center items-start">
                    <p className="badge font-normal mb-1.5">CLIENT TESTIMONIALS</p>
                    <h2 className="max-w-[888px] text-[#FCFCFD] font-bold text-[42px] max-[1024px]:text-[32px] max-[455px]:text-[24px] max-[455px]:leading-8">
                        What Our Clients Say
                    </h2>
                    <h4 className="max-w-[720px] text-[18px] text-[#A1A1A9] pt-2 max-[1024px]:text-[16px] max-[455px]:text-[14px] max-[455px]:leading-6">
                        Here's what some of our esteemed clients have to say about our services:
                    </h4>
                </div>
                
                <Slider />

            </div>

        </section>
    )
}

export default Testimonials