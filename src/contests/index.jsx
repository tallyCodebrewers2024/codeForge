import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Contests = () => {
  return (
    <div className="p-7 mt-4">
      <div className="w-full flex justify-center text-3xl font-bold">
        Coding Battlegorund
      </div>
      <div className="flex flex-col gap-2 px-14">
        <div className="w-full flex justify-between">
          <div>Upcoming Contests</div>
          <div className="text-green-600">+ Host Your Own Contest</div>
        </div>
        <div className="w-full h-[200px] rounded-lg bg-[#262626]">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="bg-black/50 h-[200px] ml-1 grid place-items-center md:basis-1/4 lg:basis-1/5"
                >
                  <div className="p-1">
                    <h2>Contest {index + 1}</h2>
                    <h5>Aug 1,2024</h5>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Contests;
