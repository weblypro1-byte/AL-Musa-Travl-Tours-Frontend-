import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;



// import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import loader from "./assets/loader.lottie"; // 👈 your file path
// import './loader.scss'
// const Loader = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#0d0d0d", // dark background
//         zIndex: 9999, // make sure it covers header/footer
//       }}
//     >
//       <DotLottieReact
//         src={loader}
//         loop
//         autoplay
//         style={{ width: 300, height: 300}}
//       />
//     </div>
//   );
// };

// export default Loader;
