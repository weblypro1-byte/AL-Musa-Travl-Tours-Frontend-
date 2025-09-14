// import React from 'react';
// import './TestimonialsSlider.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const testimonials = [
//   {
//     name: 'Leonardo Ricci',
//     country: 'Italy',
//     flag: 'https://flagcdn.com/w320/it.png',
//     text: `This was my first time in Pakistan, and I am lucky to have found the perfect tour guide. Mr. Shahid was very knowledgeable, responsive, and thoughtful. I only had 1 day to be in Pakistan...`,
//   },
//   {
//     name: 'Sadaf Chaudhry',
//     country: 'Pakistan',
//     flag: 'https://flagcdn.com/w320/pk.png',
//     text: `Shahid is an extremely knowledgeable tour guide; he presented me with a very detailed tour of Lahore. He is the perfect host...`,
//   },
//   {
//     name: 'Dr. AS Hoosen',
//     country: 'South Africa',
//     flag: 'https://flagcdn.com/w320/za.png',
//     text: `I have traveled to Pakistan in Nov 2013 and again in Nov 2014, Shahid was our guide in Peshawar, Islamabad, Rawalpindi, Murree and Lahore...`,
//   },
//   {
//     name: 'Emily Carter',
//     country: 'UK',
//     flag: 'https://flagcdn.com/w320/gb.png',
//     text: `The cultural tour was absolutely amazing. Shahid was not only a guide but also a storyteller, bringing history to life...`,
//   },
//   {
//     name: 'Ahmed Al-Farsi',
//     country: 'Oman',
//     flag: 'https://flagcdn.com/w320/om.png',
//     text: `Pakistan's mountains are breathtaking, and with Shahid guiding us, the entire experience was smooth, safe, and unforgettable...`,
//   },
// ];



// const TestimonialsSlider = () => {
//     return (
//       <section className="testimonials-section">
//         <h2 className="heading">
//           <span className="highlight">Testimonials …Our Gems</span>
//         </h2>
//         <p className="description">
//           We are delighted to share the experiences of our valued customers who have explored the
//           <strong> beauty and culture of Pakistan </strong>
//           with us.
//         </p>
  
//         <Swiper
        
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="testimonials-slider"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="testimonial-card fade-in-card">
//                 <div className="quote-mark">❝</div>
//                 <p className="testimonial-text">{testimonial.text}</p>
//                 <div className="author">
//                   <img src={testimonial.flag} alt={`${testimonial.country} flag`} className="flag" />
//                   <div>
//                     <strong>{testimonial.name}</strong>
//                     <div className="country">{testimonial.country}</div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     );
//   };
  
//   export default TestimonialsSlider;


import React from 'react';
import './TestimonialsSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Leonardo Ricci',
    country: 'Italy',
    flag: 'https://flagcdn.com/w320/it.png',
    text: `This was my first time in Pakistan, and I am lucky to have found the perfect tour guide. Mr. Shahid was very knowledgeable, responsive, and thoughtful. I only had 1 day to be in Pakistan...`,
  },
  {
    name: 'Sadaf Chaudhry',
    country: 'Pakistan',
    flag: 'https://flagcdn.com/w320/pk.png',
    text: `Shahid is an extremely knowledgeable tour guide; he presented me with a very detailed tour of Lahore. He is the perfect host...`,
  },
  {
    name: 'Dr. AS Hoosen',
    country: 'South Africa',
    flag: 'https://flagcdn.com/w320/za.png',
    text: `I have traveled to Pakistan in Nov 2013 and again in Nov 2014, Shahid was our guide in Peshawar, Islamabad, Rawalpindi, Murree and Lahore...`,
  },
  {
    name: 'Emily Carter',
    country: 'UK',
    flag: 'https://flagcdn.com/w320/gb.png',
    text: `The cultural tour was absolutely amazing. Shahid was not only a guide but also a storyteller, bringing history to life...`,
  },
  {
    name: 'Ahmed Al-Farsi',
    country: 'Oman',
    flag: 'https://flagcdn.com/w320/om.png',
    text: `Pakistan's mountains are breathtaking, and with Shahid guiding us, the entire experience was smooth, safe, and unforgettable...`,
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="testimonials-section">
      <h2 className="heading">
        <span className="highlight">Testimonials …Our Gems</span>
      </h2>
      <p className="description">
        We are delighted to share the experiences of our valued customers who have explored the
        <strong> beauty and culture of Pakistan </strong>
        with us.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonials-slider"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="quote-mark">❝</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="author">
                <img
                  src={testimonial.flag}
                  alt={`${testimonial.country} flag`}
                  className="flag"
                />
                <div>
                  <strong>{testimonial.name}</strong>
                  <div className="country">{testimonial.country}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSlider;
