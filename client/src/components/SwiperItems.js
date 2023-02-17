import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import PaintItem from "./PaintItem";
const SwiperItems = ({ items }) => {
  console.log({ items });
  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <div>
          {items &&
            items.map((item) => (
              <SwiperSlide>
                <PaintItem items={item} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
export default SwiperItems;
