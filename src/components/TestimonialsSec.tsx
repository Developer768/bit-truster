import React from "react";
import Testimonial from "./Testimonial";

const TestimonialsSec: React.FC = () => {
  return (
    <section className="testimonials bg-bgGrey padding">
      <h2 className="sec_norm_heading mb-[50px]  text-black">Testimonials</h2>
      <Testimonial />
    </section>
  );
};

export default TestimonialsSec;
