"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BookCarouselProps {
  className?: string;
}

export function BookCarousel({ className }: BookCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    duration: 20,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(currentIndex);
    setCanScrollPrev(currentIndex > 0);
    setCanScrollNext(currentIndex < slides.length - 1);
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Metro system themed slides
  const slides = [
    {
      id: 1,
      title: "Modern Metro Network",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur obcaecati exercitationem dicta incidunt eaque voluptates atque harum eius minus. Temporibus?",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Smart Ticketing",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur obcaecati exercitationem dicta incidunt eaque voluptates atque harum eius minus. Temporibus?",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "24/7 Metro Service",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur obcaecati exercitationem dicta incidunt eaque voluptates atque harum eius minus. Temporibus?",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "24/7 Metro Service",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur obcaecati exercitationem dicta incidunt eaque voluptates atque harum eius minus. Temporibus?",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section
      id="carousel"
      className={cn("relative w-screen overflow-hidden", className)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%]">
              <div className="relative h-[50vh] w-screen">
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/0 via-foreground/5 to-foreground/10 dark:via-background/5 dark:to-background/10 z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    imageRendering: "crisp-edges",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <div className="relative z-20 h-full flex flex-col justify-end py-20 px-20 md:px-40 max-w-4xl text-justify">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-md md:text-lg text-white/90 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 md:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="size-12 rounded-full text-foreground bg-background/40 hover:bg-accent/70 backdrop-blur-sm transition-all duration-300"
          onClick={scrollPrev}
        >
          <ChevronLeft className="size-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="size-12 rounded-full text-foreground bg-background/40 hover:bg-accent/70 backdrop-blur-sm transition-all duration-300"
          onClick={scrollNext}
        >
          <ChevronRight className="size-6" />
        </Button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "size-3 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-foreground scale-125"
                : "bg-foreground/40 hover:bg-foreground/70"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
