import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import PaintItem from "./PaintItem";

const SwiperItems = ({ items }) => {
  return (
    <Swiper slidesPerView={4}>
      <div>
        {items &&
          items.map((item) => (
            <SwiperSlide
              style={{ width: "249px", marginRight: "18px" }}
              key={item.no}
            >
              <PaintItem items={item} />
            </SwiperSlide>
          ))}
      </div>
    </Swiper>
  );
};
export default SwiperItems;
