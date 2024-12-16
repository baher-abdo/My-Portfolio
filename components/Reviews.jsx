"use client"
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iure maxime, eos labore suscipit neque.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Evelyn Andreson",
    job: "Interior Designer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iure maxime, eos labore suscipit neque.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iure maxime, eos labore suscipit neque.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iure maxime, eos labore suscipit neque.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Oliver Taylor",
    job: "Engineer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iure maxime, eos labore suscipit neque.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Mason Wilson",
    job: "Video Editon",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam iure maxime, eos labore suscipit neque.",
  },
];

export default function Reviews() {
  return <section className="mb-12 xl:mb-32">
    <div className="container mx-auto">
      <h2 className="section-title mb-12 mx-auto text-center">Reviews</h2>
      {/* slider */}
      <Swiper slidesPerView={1} breakpoints={{
        640:{slidesPerView:2},
        1400:{slidesPerView:3},
      }}
      spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}} className="h-[350px]"
      >
        {reviewsData.map((review , index) => {
          return <SwiperSlide key={index}>
            <Card className="bg-tertiary-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
              <CardHeader className="p-0 mb-10">
                <div className="flex items-center gap-x-4">
                {/* image */}
                  <Image src={review.avatar} height={70} width={70} alt="avatar" priority />
                  {/* name */}
                  <div className="flex flex-col">
                    <CardTitle>{review.name}</CardTitle>
                    <p>{ review.job}</p>
                  </div>
                </div>
              </CardHeader>
              <CardDescription className="text-muted-foreground">{ review.review}</CardDescription>
            </Card>
          </SwiperSlide>
        })}
      </Swiper>
      
    </div>
  </section>;
}
