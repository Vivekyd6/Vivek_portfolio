
import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import './Testimonial.scss';


const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currIndex, setCurrIndex] = useState([]);


  const handleClick = (index) => {
    setCurrIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setTestimonials(data);

    })
  }, []);



  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonials-item app__flex">
            <img src={urlFor(testimonials[currIndex].imgurl)} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currIndex].name}</h4>
                <h5 className="p-text">{testimonials[currIndex].company}</h5>
              </div>
            </div>
          </div> */

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currIndex === 0 ? testimonials.length - 1 : currIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currIndex === testimonials.length - 1 ? 0 : currIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Testimonial;
