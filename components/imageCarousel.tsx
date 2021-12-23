import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

interface ImagecarouselProps {
  imageLinkList: string[];
}

const Imagecarousel = ({ imageLinkList }: ImagecarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<Number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToWithScrollPixels = (
    scrollDirection: string,
    scrollOffset: number
  ) => {
    if (carouselRef.current) {
      if (scrollDirection === "left") {
        carouselRef.current.scrollLeft -= scrollOffset;
      } else if (scrollDirection === "right") {
        carouselRef.current.scrollLeft += scrollOffset;
      }
    }
  };

  if (imageLinkList.length < 1) {
    return <p>Kindly provide image links to Use Slider!</p>;
  }

  return (
    <div className="maincarouselContainer">
      {imageLinkList.length > 1 && (
        <>
          <button
            onClick={() => {
              scrollToWithScrollPixels("left", 300);
            }}
            className="maincarouselLeftArrow carouselArrow"
          >
            &larr;
          </button>
          <button
            onClick={() => {
              scrollToWithScrollPixels("right", 300);
            }}
            className="maincarouselRightArrow carouselArrow"
          >
            &rarr;
          </button>
        </>
      )}

      <div id="maincarousel" ref={carouselRef} className="maincarousel">
        {imageLinkList.length > 1 ? (
          imageLinkList.map((imgLink: string) => {
            return (
              <div key={uuidv4()} className="carouselImage">
                <Image
                  src={imgLink}
                  alt="Image"
                  width={"100%"}
                  height={"40%"}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            );
          })
        ) : (
          <div key={uuidv4()} className="singlecarouselImage">
            <Image
              src={imageLinkList[0]}
              alt="Image"
              height={"100%"}
              width={"100%"}
              layout="responsive"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Imagecarousel;
