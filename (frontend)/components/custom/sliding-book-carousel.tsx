"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/custom/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import BookCard from "../../src/app/thu-vien/_components/book-card";

export default function SlidingBookCarousel({
  bookList,
  className,
}: {
  bookList: any[];
  className?: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setActiveIndex(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const selectedIndex = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  return (
    <section className={cn("bg-ft-primary-blue-100", className)}>
      {bookList.length > 4 ? (
        <div className="container mx-auto flex flex-col gap-8 items-center">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
              startIndex: 0,
              dragFree: !isMobile,
              containScroll: "trimSnaps",
            }}
            className="w-[calc(100%-20px)] [&>div[data-slot='carousel-content']]:overflow-hidden md:[&>div[data-slot='carousel-content']]:overflow-visible"
          >
            <CarouselContent>
              {bookList.map((book, index) => {
                const isActive = index === activeIndex;
                return (
                  <CarouselItem
                    key={book.id}
                    onClick={() => selectedIndex(index)}
                    className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/5"
                  >
                    <div className="p-1 w-full max-w-[500px] mx-auto">
                      <BookCard
                        key={book.id}
                        book={book}
                        className={isActive ? "" : "scale-95 opacity-50"}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center space-x-2">
            {bookList.map((_, index) => (
              <button
                key={index}
                onClick={() => selectedIndex(index)}
                className={cn(
                  "size-3 rounded-full transition-all duration-500 hover:scale-110 hover:bg-primary/70",
                  activeIndex === index
                    ? "bg-primary scale-110 w-[30px]"
                    : "bg-primary/50 hover:bg-primary/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto w-full flex gap-8">
          {bookList.map((book) => (
            <div key={book.id} className="p-1 w-full max-w-[300px]">
              <BookCard key={book.id} book={book} />
            </div>
          ))}
        </div>
      )}

      {/* <Button
          asChild
          className="max-w-fit bg-ft-primary-yellow-500 font-semibold"
        >
          <Link href="/library">Go to Library</Link>
        </Button> */}
    </section>
  );
}
