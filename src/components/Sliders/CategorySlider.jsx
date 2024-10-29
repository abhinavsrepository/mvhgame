"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CategorySlider({categories}) {
  const breakpoints = {
    320: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 6,
    },
  };

  return (
    <div className="mb-6">
      <div clasName="flex justify-between gap-4">
        <h2 className="font-display mb-4 items-center"> Categories</h2>
        <a
          href="/category"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          View All
          <ChevronRightIcon className="h-4 w-4 inline-block text-accent" />{" "}
        </a>
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={6}
        breakpoints={breakpoints}
        navigation
        scrollbar={{ draggable: true }}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-incactive-color": "#999999",
          "--swiper-pagination-bullet-incactive-opacity": "1",
          "--swiper-pagination-bullet-size": "0.6em",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-theme-color": "#FFF",
          "--swiper-navigation-size": "24px",
          "--swiper-navigation-sides-offset": "30px",
        }}
      >
        <SwiperSlide>
            slide 1
        </SwiperSlide>

{categories.map((item,i)=>(
    <SwiperSLide key={i} className="group">
        <a href={  `/category/${item.slug}`} className="group">
        <div className="overflow"></div></a>
    </SwiperSLide>

) )}
        
      </Swiper>
    </div>
  );
}
