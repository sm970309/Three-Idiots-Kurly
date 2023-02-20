import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import PaintItem from "./PaintItem";

const SwiperItems = ({ items }) => {
  return (
    <div style={{ marginTop: "20px", width: "1050px", margin: "0px auto" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        navigations
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
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
