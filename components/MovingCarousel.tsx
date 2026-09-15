"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const SLIDES = [
  { id: 1, src: "/images/slide1.JPEG", alt: "Slide 1" },
  { id: 2, src: "/images/slide2.JPEG", alt: "Slide 2" },
  { id: 3, src: "/images/slide3.JPEG", alt: "Slide 3" },
  { id: 4, src: "/images/slide4.JPEG", alt: "Slide 4" },
  { id: 5, src: "/images/slide5.JPEG", alt: "Slide 5" },
  { id: 6, src: "/images/slide6.JPEG", alt: "Slide 6" },
  { id: 7, src: "/images/slide7.JPEG", alt: "Slide 7" },
  { id: 8, src: "/images/slide8.JPEG", alt: "Slide 8" },
  { id: 9, src: "/images/slide9.JPEG", alt: "Slide 9" },
  { id: 10, src: "/images/slide10.JPEG", alt: "Slide 10" },
  { id: 11, src: "/images/slide11.JPEG", alt: "Slide 11" },
  { id: 12, src: "/images/slide12.JPEG", alt: "Slide 12" },
  { id: 13, src: "/images/slide13.JPEG", alt: "Slide 13" },
  { id: 14, src: "/images/slide14.JPEG", alt: "Slide 14" },
  { id: 15, src: "/images/slide15.JPEG", alt: "Slide 15" },
  { id: 16, src: "/images/slide16.JPEG", alt: "Slide 16" },
  { id: 17, src: "/images/slide17.JPEG", alt: "Slide 17" },
  { id: 18, src: "/images/slide18.JPEG", alt: "Slide 18" },
  { id: 19, src: "/images/slide19.JPEG", alt: "Slide 19" },
  { id: 20, src: "/images/slide20.JPEG", alt: "Slide 20" },
  { id: 21, src: "/images/slide21.JPEG", alt: "Slide 21" },
  { id: 22, src: "/images/slide22.JPEG", alt: "Slide 22" },
  { id: 23, src: "/images/slide23.JPEG", alt: "Slide 23" },
  { id: 24, src: "/images/slide24.JPEG", alt: "Slide 24" },
  { id: 25, src: "/images/slide25.JPEG", alt: "Slide 25" },
  { id: 26, src: "/images/slide26.JPEG", alt: "Slide 26" },
  { id: 27, src: "/images/slide27.JPEG", alt: "Slide 27" },
  { id: 28, src: "/images/slide28.JPEG", alt: "Slide 28" },
  { id: 29, src: "/images/slide29.JPEG", alt: "Slide 29" },
  { id: 30, src: "/images/slide30.JPEG", alt: "Slide 30" },
  { id: 31, src: "/images/slide31.JPEG", alt: "Slide 31" },
  { id: 32, src: "/images/slide32.JPEG", alt: "Slide 32" },
  { id: 33, src: "/images/slide33.JPEG", alt: "Slide 33" },
  { id: 34, src: "/images/slide34.JPEG", alt: "Slide 34" },
  { id: 35, src: "/images/slide35.JPEG", alt: "Slide 35" },
  { id: 36, src: "/images/slide36.JPEG", alt: "Slide 36" },
  { id: 37, src: "/images/slide37.JPEG", alt: "Slide 37" },
  { id: 38, src: "/images/slide38.JPEG", alt: "Slide 38" },
  { id: 39, src: "/images/slide39.JPEG", alt: "Slide 39" },
  { id: 40, src: "/images/slide40.JPEG", alt: "Slide 40" },
  { id: 41, src: "/images/slide41.JPEG", alt: "Slide 41" },
  { id: 42, src: "/images/slide42.JPEG", alt: "Slide 42" },
  { id: 43, src: "/images/slide43.JPEG", alt: "Slide 43" },
  { id: 44, src: "/images/slide44.JPEG", alt: "Slide 44" },
  { id: 45, src: "/images/slide45.JPEG", alt: "Slide 45" },
  { id: 46, src: "/images/slide46.JPEG", alt: "Slide 46" },
  { id: 47, src: "/images/slide47.JPEG", alt: "Slide 47" },
  { id: 48, src: "/images/slide48.JPEG", alt: "Slide 48" },
  { id: 49, src: "/images/slide49.JPEG", alt: "Slide 49" },
  { id: 50, src: "/images/slide50.JPEG", alt: "Slide 50" },
  { id: 51, src: "/images/slide51.JPEG", alt: "Slide 51" },
  { id: 52, src: "/images/slide52.JPEG", alt: "Slide 52" },
  { id: 53, src: "/images/slide53.JPEG", alt: "Slide 53" },
  { id: 54, src: "/images/slide54.JPEG", alt: "Slide 54" },
  { id: 55, src: "/images/slide55.JPEG", alt: "Slide 55" },
  { id: 56, src: "/images/slide56.JPEG", alt: "Slide 56" },
  { id: 57, src: "/images/slide57.JPEG", alt: "Slide 57" },
  { id: 58, src: "/images/slide58.JPEG", alt: "Slide 58" },
  { id: 59, src: "/images/slide59.JPEG", alt: "Slide 59" },
  { id: 60, src: "/images/slide60.JPEG", alt: "Slide 60" },
  { id: 61, src: "/images/slide61.JPEG", alt: "Slide 61" },
  { id: 62, src: "/images/slide62.JPEG", alt: "Slide 62" },
  { id: 63, src: "/images/slide63.JPEG", alt: "Slide 63" },
  { id: 64, src: "/images/slide64.JPEG", alt: "Slide 64" },
  { id: 65, src: "/images/slide65.JPEG", alt: "Slide 65" },
  { id: 66, src: "/images/slide66.JPEG", alt: "Slide 66" },
  { id: 67, src: "/images/slide67.JPEG", alt: "Slide 67" },
  { id: 68, src: "/images/slide68.JPEG", alt: "Slide 68" },
  { id: 69, src: "/images/slide69.JPEG", alt: "Slide 69" },
  { id: 70, src: "/images/slide70.JPEG", alt: "Slide 70" },
  { id: 71, src: "/images/slide71.JPEG", alt: "Slide 71" },
  { id: 72, src: "/images/slide72.JPEG", alt: "Slide 72" },
  { id: 73, src: "/images/slide73.JPEG", alt: "Slide 73" },
  { id: 74, src: "/images/slide74.JPEG", alt: "Slide 74" },
  { id: 75, src: "/images/slide75.JPEG", alt: "Slide 75" },
  { id: 76, src: "/images/slide76.JPEG", alt: "Slide 76" },
  { id: 77, src: "/images/slide77.JPEG", alt: "Slide 77" },
  { id: 78, src: "/images/slide78.JPEG", alt: "Slide 78" },
  { id: 79, src: "/images/slide79.JPEG", alt: "Slide 79" },
  { id: 80, src: "/images/slide80.JPEG", alt: "Slide 80" },
];

export default function MovingCarousel() {
  // Initialize the carousel with loop option and autoplay plugin
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2200, stopOnInteraction: false })
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {SLIDES.map((slide) => (
          <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-60 md:h-300">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover rounded-xl"
              priority={slide.id === 1} // Optimize loading for the first image
            />
          </div>
        ))}
      </div>
    </div>
  );
}