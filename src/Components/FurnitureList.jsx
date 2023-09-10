/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState,useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";


import '../styles/furnitureSlider.css'

function FurnitureList({ list }) {
  function* gen() {
    let i = 0;
    while (true) {
      yield i;
      i++;
    }
  }

  const getID = gen();
  const [listFurnitures,setListFurnitures]=useState(list)
  const [furnitureInfo,setFurnitureInfo]=useState({title:'',description:''})  
 
  useEffect(() => {
    setListFurnitures(list)
  }, [list])
  
  useEffect(() => {
    setFurnitureInfo({...listFurnitures[0]})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  window.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowRight'){
      handleNext()
    }
    if(e.key==='ArrowLeft'){
      handlePrev()
    }
  })
  return (
    <div className="hero">
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(s) => {
          setFurnitureInfo({
            title:listFurnitures[s.activeIndex].title,
            description:listFurnitures[s.activeIndex].description
          })
          //console.log(s);
        }}
        navigation
      >
        {list.map((l) => (
          <SwiperSlide key={getID.next().value}>
            <picture>
              <source media="(max-width: 405px)" srcSet={l.imageMobile} />
              <img src={l.imageDeskTop} alt="imageFurniture" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="ctnInfo">
        <h3 className="title">{furnitureInfo.title}</h3>
        <p>{furnitureInfo.description}</p>
        <a href='#' className="link-shop">Shop Now &rarr;</a>
        <div className="btnList">
          <button onClick={()=>handlePrev()}>&lt;</button>
          <button  onClick={()=>handleNext()}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default FurnitureList;
