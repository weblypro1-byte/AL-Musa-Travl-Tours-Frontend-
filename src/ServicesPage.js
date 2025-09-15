






import React from "react";


// ========== Styles (SCSS inside <style>) ==========
const ServicesStyles = () => (
  <style>{`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --primary-color: #f38602;
    --secondary-color: rgb(0,0,0);
    --accent-color: #22c55e;
    --text-color: #1e293b;
    --light-bg: #f8fafc;
    --border-radius: 12px;
    --shadow: 0 10px 25px rgba(0,0,0,0.1);
    --transition: all 0.3s ease;
  }

  .consultant-page { padding-top:0; max-width: 1400px; margin:0 auto; }

  .consultant-section {
    margin:0; padding: 1rem 2rem;
   
  }


  .section-heading { text-align:center; font-size:2.2rem; margin-bottom:2.5rem; padding-top: 3rem;color: var(--text-color); font-weight:700; position:relative; padding-bottom:1rem; }
  .section-heading::after { content:""; position:absolute; bottom:0; left:50%; transform:translateX(-50%); width:80px; height:4px; background: var(--primary-color); border-radius:2px; }

  .content { display:flex; flex-direction:column; align-items:center; gap:2rem; }
  @media (min-width: 768px) {
    .content { flex-direction:row; justify-content:space-between; }
    .consultant-section.reverse .content { flex-direction: row-reverse; }
  }

  .image-container { flex:1; display:flex; justify-content:center; align-items:center; }
  .circle-img { width:250px; height:250px; border-radius:50%; object-fit:cover; border:4px solid var(--primary-color); box-shadow: var(--shadow); transition: var(--transition); }
  .circle-img:hover { transform: scale(1.05); }

  .text-container { flex:1; text-align:center; padding:1rem; }
  @media (min-width:768px) { .text-container { text-align:left; padding:0 2rem; } }

  .consultant-name { font-size:2rem; font-weight:700; color:var(--primary-color); margin-bottom:1rem; }
  .text-container p { font-size:1.1rem; line-height:1.7; color:var(--secondary-color); margin-bottom:2rem; }

  .whatsapp-btn { display:inline-flex; align-items:center; gap:0.5rem; padding:0.8rem 1.8rem; background: var(--accent-color); color:white; text-decoration:none; border-radius:50px; font-weight:600; font-size:1rem; transition:var(--transition); box-shadow:0 4px 15px rgba(34,197,94,0.3); }
  .whatsapp-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(34,197,94,0.4); background:#16a34a; }

  .slider-container {
    margin-top:2rem; overflow-x:auto; display:flex; gap:1.5rem;
    padding:0.5rem; scroll-snap-type:x mandatory; scrollbar-width:none;
  }
  .slider-container::-webkit-scrollbar { display:none; }

  .slide {
    scroll-snap-align:start; flex:0 0 calc(100% - 2rem); height:500px;
    border-radius:var(--border-radius); overflow:hidden; box-shadow:var(--shadow);
    transition: var(--transition); position:relative;
  }
  @media (min-width:640px) { .slide { flex:0 0 calc(50% - 1rem); } }
  @media (min-width:1024px) { .slide { flex:0 0 calc(33.333% - 1rem); } }

  .slide img { width:100%; height:100%; object-fit:cover; transition:0.3s; }
  .slide img:hover { transform: scale(1.05); }

  .slide-caption {
    position:absolute; bottom:0; left:0; width:100%; text-align:center;
    background: rgba(0,0,0,0.6); color:white; padding:0.5rem 0; font-weight:600;
    font-size:1rem; transition: 0.3s;
  }
    .consultant-designation {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.8rem;
  // font-style: italic;
}

  // .slide:hover .slide-caption { background: rgba(0,0,0,0.8); font-size:1.05rem; }
  `}</style>
);

// ========== WhatsApp Button ==========
const WhatsAppButton = ({ number, message }) => (
  <a
    href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
 
  >
    <i className="fab fa-whatsapp"></i> Chat on WhatsApp
  </a>
);

// ========== Image Slider ==========
const ImageSlider = ({ images, captions }) => (
  <div className="slider-container">
    {images.map((img, idx) => (
      <div className="slide" key={idx}>
        <img src={img} alt={`Slide ${idx + 1}`} />
        {captions && captions[idx] && (
          <div className="slide-caption">{captions[idx]}</div>
        )}
      </div>
    ))}
  </div>
);

// ========== Consultant Section ==========
const ConsultantSection = ({ heading, name, designation, image, description, whatsapp, sliderImages, reverse, captions }) => (
  <section className={`consultant-section ${reverse ? "reverse" : ""}`}>
    <h2 className="section-heading">{heading}</h2>

    <div className="content" >
      <div className="image-container">
        <img src={image} alt="Consultant" className="circle-img"/>
      </div>

      <div className="text-container" >
        <h3 className="consultant-name">{name}</h3>
        {designation && <h4 className="consultant-designation">{designation}</h4>} 
        <p>{description}</p>
        <WhatsAppButton number={whatsapp} message={`Hello, I need guidance regarding ${heading}`} />
      </div>
    </div>

    <ImageSlider images={sliderImages} captions={captions} />
  </section>
);

// ========== Full Page ==========
export default function ServicesPage() {
  const sections = [
    {
      heading: "ZAYARAT & GULF VISAS",
      name: "Mr. Agha Zain-ul-Abdeen",
      designation: "HR Department", 
      image: 'https://res.cloudinary.com/dslbieqdx/image/upload/v1757765491/HR_rgauuh.png',
      description: "With over 10 years of experience in international education, our consultant provides comprehensive guidance...",
      whatsapp: "923178221428",
    

      sliderImages: [
        "https://res.cloudinary.com/dslbieqdx/image/upload/v1757852991/caption_ju7nwz.jpg",
           "https://res.cloudinary.com/dslbieqdx/image/upload/v1757853170/LrjuY2Yq-Kuwait-37_1_hncajl.jpg",
           "https://inminds.com/img/ziyarat-20191225_172035-1280.jpg",
      ],
      captions: ["kuwait", "Saudia Arabia", "Iraq"],
    },
    {
      heading: "WORK VISAS & TICKETS",
      name: "Ms. Mishal Shoukat",
      designation: "Manager", 
      image: "https://res.cloudinary.com/dslbieqdx/image/upload/v1757767806/gray-woman-placeholder-portrait-vector-24005404_fvymfj.avif",
      description: "We make work visas for Europe and Gulf countries fast and hassle-free...",
           whatsapp: "923178221446",
      sliderImages: [
        "https://media.cntraveller.com/photos/617936a2a8f76267fba5d115/master/w_1600%2Cc_limit/The%2520Burj%2520Khalifa-GettyImages-1084264582.jpeg",
               "https://lofficielarabia.s3.ap-south-1.amazonaws.com/upload_image/1736062148-Katara%20Towers.jpg",
             "https://media.assettype.com/outlooktraveller/2025-03-13/llhib82x/shutterstock2428557729_min.jpg",
      ],
      captions: ["Dubai", "Qatar", "Bahrain"],
    },
    {
      heading: "EUROPE VISA",
      name: "Ms. Sajida Riaz",
      designation: "C.o.o.", 
      image: "https://res.cloudinary.com/dslbieqdx/image/upload/v1757767806/default-female-avatar-profile-icon-social-media-chatting-online-user-free-vector_dd17xr.jpg",
      description: "Our career advisor specializes in helping students identify their strengths and interests...",
      whatsapp: "923178221448",
  
      sliderImages: [
        "https://res.cloudinary.com/dslbieqdx/image/upload/v1757854761/123385867_998454090641532_593194232207253126_n_r9ne0o.jpg",
        "https://c4.wallpaperflare.com/wallpaper/313/933/99/sunset-the-city-france-paris-wallpaper-preview.jpg",
        "https://media.istockphoto.com/id/489776362/photo/berlin-skyline-panorama-with-tv-tower-at-sunset-germany.jpg?s=612x612&w=0&k=20&c=Ng6cNc_9FEtoA1Go3P86ltVsy_-yoAZWcANCQr2ftGs=",
      ],
      captions: ["Germany", "France", "Canada"],
    },
    {
      heading: "UMRAH & HAJJ",
      name: "Ms. Gulnaz",
      designation: "Accountant", 
      image: "https://res.cloudinary.com/dslbieqdx/image/upload/v1757767807/person-gray-photo-placeholder-woman-vector-22964655_w7vemu.webp",
      description: "We simplify Umrah and Hajj visas for a fast and hassle-free process...",
      whatsapp: "923178221425",
      sliderImages: [
        "https://makkah-madinah.accor.com/wp-content/uploads/2024/08/007-Sun-over-Al-Haram-Makkah.jpg",
        "https://madinasharif.wordpress.com/wp-content/uploads/2019/12/madina-sharif-559a.jpg?w=584",
        "https://i.pinimg.com/564x/18/26/df/1826df7c66f07ee9f643699536a9c7ce.jpg",
      ],
      captions: ["Makkah", "Medina", "Jannat-ul-Baqi"],
    },
    {
      heading: "TOURIST VISAS",
      name: "Ms. Muqadas Bibi",
      designation: "Supervisor", 
      image: "https://res.cloudinary.com/dslbieqdx/image/upload/v1757767806/b5912c28fd86525fa96d03bb78e020af_xa1gwx.jpg",
      description: "Simplifying your visit visa process with expert guidance for a stress-free travel experience...",
           whatsapp: "923178221447",
      sliderImages: [
        "https://res.cloudinary.com/dslbieqdx/image/upload/v1757768703/a_lvbe0m.webp",
               "https://res.cloudinary.com/dslbieqdx/image/upload/v1757768741/Discover-The-Maldives_t0w43d.jpg",
             "https://res.cloudinary.com/dslbieqdx/image/upload/v1757768834/romania-photo_jsmlqn.jpg",
      ],
      captions: ["Turkey", "Maldives", "Romania"],
    },
  
    {
      heading: "VISIT VISAS",
      name: "Ms. Satiba Asif",
      
      designation: "Social Media Coordinator ", 

      image: "https://res.cloudinary.com/dslbieqdx/image/upload/v1757767806/person-gray-photo-placeholder-woman-vector-22964655_1_unbdwr.webp",
      description: "Visit visa requirements can be complex and stressful. Our visa specialist has extensive knowledge...",
      whatsapp: "923178221426",
      sliderImages: [
        "https://res.cloudinary.com/dslbieqdx/image/upload/v1757768419/a_tlhdpq.jpg",
        "https://www.sarahdegheselle.com/wp-content/uploads/2020/10/AdobeStock_282381041-1-1024x683.jpeg",
        "https://seasonsforthesoul.com/wp-content/uploads/2020/06/usa-my-country-my-people.jpg?w=444&h=621",
      ],
      captions: ["UK", "Italy", "USA"],
    },
   
  
 
  ];

  return (
    <>
      <ServicesStyles />
      <div className="consultant-page">
        {sections.map((section, idx) => (
          <ConsultantSection key={idx} {...section} reverse={idx % 2 !== 0} />
        ))}
      </div>
    </>
  );
}


