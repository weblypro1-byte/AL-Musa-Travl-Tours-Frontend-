// import React from "react";
// import "./SubscribeCard.scss";
// import { motion } from "framer-motion";

// const SubscribeCard = () => {
//   return (
//     <motion.div
//       className="subscribe-card"
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* Left Image */}
//       <motion.div
//         className="subscribe-card__image"
//         initial={{ scale: 0.8, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <motion.img
//           src="https://x8tours.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-07-at-11.23.59_e6667b62-1024x1024.jpg"
//           alt="Beach Plane"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         />
//       </motion.div>

//       {/* Right Content */}
//       <motion.div
//         className="subscribe-card__content"
//         initial={{ x: 80, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         <h2>Get special offers from Musa Al Raza Travel & Tours</h2>
//         <p>Subscribe to see secret offers, drop the moment you sign up!</p>

//         <motion.form
//           className="subscribe-card__form"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.5 }}
//         >
//           <input type="email" placeholder="Email Address" />
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05, backgroundColor: "#0077b6", color: "#fff" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Submit
//           </motion.button>
//         </motion.form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SubscribeCard;
import React, { useState } from "react";
import "./SubscribeCard.scss";
import { motion } from "framer-motion";
import { message } from "antd";

const SubscribeCard = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      return message.error("⚠️ Please enter an email!");
    }

    setLoading(true);
    try {
      const res = await fetch("https://al-musa-travl-tours-backend-ru8f.vercel.app/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        message.success("Mail Sent successful!");
        setEmail("");
      } else {
        message.error("Failed to Send. Try again!");
      }
    } catch (err) {
      console.error("Frontend error:", err);
      message.error("⚠️ Server error, please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="subscribe-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Image */}
      <motion.div
        className="subscribe-card__image"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src="https://x8tours.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-07-at-11.23.59_e6667b62-1024x1024.jpg"
          alt="Beach Plane"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="subscribe-card__content"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2>Get special offers from Musa Al Raza Travel & Tours</h2>
        <p>Subscribe to see secret offers, drop the moment you sign up!</p>

        <motion.form
          onSubmit={handleSubscribe}
          className="subscribe-card__form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05, backgroundColor: "#0077b6", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default SubscribeCard;
