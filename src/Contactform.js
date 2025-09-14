


// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "./ContactForm.scss"; // Custom styles

// export default function ContactPage() {
//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <Container className="text-center text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="hero-title"
//           >
//             Get in Touch
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="hero-subtitle"
//           >
//             Have questions? We'd love to hear from you!
//           </motion.p>
//         </Container>
//       </section>

//       <section className="contact-section">
//         <Container>
//           <Row>
//             {/* Left Section: Contact Info */}
//             <Col md={5} className="contact-info">
//               <h2>Contact Us</h2>
//               <p>Feel free to reach out to us for any inquiries or assistance.</p>

//               <div className="info-item">
//                 <i className="bi bi-telephone-fill icon"></i>
//                 <span>+92 123 456 7890</span>
//               </div>

//               <div className="info-item">
//                 <i className="bi bi-envelope-fill icon"></i>
//                 <span>info@psfinternationalschool.com</span>
//               </div>

//               <div className="info-item">
//                 <i className="bi bi-geo-alt-fill icon"></i>
//                 <span>123 Main Street, Lahore, Pakistan</span>
//               </div>
//             </Col>

//             {/* Right Section: Contact Form */}
//             <Col md={7}>
//               <div className="contact-form">
//                 <Form>
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>First Name</Form.Label>
//                         <Form.Control type="text" placeholder="First" />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control type="text" placeholder="Last" />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type="email" placeholder="example@email.com" />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Phone (optional)</Form.Label>
//                     <Form.Control type="text" placeholder="XXX-XXX-XXXX" />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Message</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={4}
//                       placeholder="Type your message ..."
//                     />
//                   </Form.Group>

//                   <div className="text-center">
//                     <Button
//                       variant="primary"
//                       type="submit"
//                       className="submit-btn"
//                     >
//                       Submit
//                     </Button>
//                   </div>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// }


// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "./ContactForm.scss"; // Custom styles

// export default function ContactPage() {
//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <Container className="text-center text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="hero-title"
//           >
//             Get in Touch
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="hero-subtitle"
//           >
//             Have questions? We'd love to hear from you!
//           </motion.p>
//         </Container>
//       </section>

//       {/* Contact + Map Section */}
//       <section className="contact-section">
//         <Container>
//           <Row>
//             {/* Left Section: Contact Info */}
//             <Col md={5} className="contact-info">
//               <h2>Contact Us</h2>
//               <p>Feel free to reach out to us for any inquiries or assistance.</p>

//               <div className="info-item">
//                 <i className="bi bi-telephone-fill icon"></i>
//                 <span>+92 123 456 7890</span>
//               </div>

//               <div className="info-item">
//                 <i className="bi bi-envelope-fill icon"></i>
//                 <span>info@psfinternationalschool.com</span>
//               </div>

//               <div className="info-item">
//                 <i className="bi bi-geo-alt-fill icon"></i>
//                 <span>123 Main Street, Lahore, Pakistan</span>
//               </div>

//               {/* Responsive Google Map */}
//               <div className="map-container">
//                 <iframe
//                   title="Google Map"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.791185948196!2d74.3495763!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f7a53f5f9db%3A0x1bfae5b9b5f7af4d!2sLahore!5e0!3m2!1sen!2s!4v1694512345678!5m2!1sen!2s"
//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </Col>

//             {/* Right Section: Contact Form */}
//             <Col md={7}>
//               <div className="contact-form">
//                 <Form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     // 🔗 Here we'll connect to backend later
//                     alert("Form submitted! (Backend integration pending)");
//                   }}
//                 >
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>First Name</Form.Label>
//                         <Form.Control type="text" placeholder="First" required />
//                       </Form.Group>
//                     </Col>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control type="text" placeholder="Last" required />
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type="email" placeholder="example@email.com" required />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Phone (optional)</Form.Label>
//                     <Form.Control type="text" placeholder="XXX-XXX-XXXX" />
//                   </Form.Group>

//                   <Form.Group className="mb-3">
//                     <Form.Label>Message</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       rows={4}
//                       placeholder="Type your message ..."
//                       required
//                     />
//                   </Form.Group>

//                   <div className="text-center">
//                     <Button variant="primary" type="submit" className="submit-btn">
//                       Submit
//                     </Button>
//                   </div>
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { message } from "antd"; // ✅ AntD Toast
import "./ContactForm.scss";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://al-musa-travl-tours-backend-dc35.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message: msg,
        }),
        
      });

      const data = await res.json();

      if (data.success) {
        console.log("Toast should show now ✅");

        message.success("Email sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMsg("");
      } else {
        message.error("Failed to send email. Try again!");
      }
    } catch (err) {
      console.error("Frontend error:", err);
      message.error("⚠️ Server error, please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-subtitle"
          >
            Have questions? We'd love to hear from you!
          </motion.p>
        </Container>
      </section>

      {/* Contact + Map Section */}
      <section className="contact-section">
        <Container>
          <Row>
            {/* Left Section: Contact Info */}
            <Col md={5} className="contact-info">
              <h2>Contact Us</h2>
              <p>Feel free to reach out to us for any inquiries or assistance.</p>

              <div className="info-item">
                <i className="bi bi-telephone-fill icon"></i>
                <span>051 5710008</span>
              </div>

              <div className="info-item">
                <i className="bi bi-envelope-fill icon"></i>
                <span>MUSAALRAZA51214@GMAIL.COM</span>
              </div>

              <div className="info-item">
                <i className="bi bi-geo-alt-fill icon"></i>
                <span>OFFICE #4 1st Floor Pak Plaza Pwd Main Road Islamabad</span>
              </div>

              {/* Responsive Google Map */}
              <div className="map-container">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.190372304152!2d73.15089259999999!3d33.5744061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x28469e795f7aab63%3A0xbbd5bb511168c1ee!2sMusa%20Al%20Raza%20Travel%20and%20Tours!5e0!3m2!1sen!2s!4v1757835968843!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>

            {/* Right Section: Contact Form */}
            <Col md={7}>
              <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Last"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone (optional)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="XXX-XXX-XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Type your message ..."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="submit-btn"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
