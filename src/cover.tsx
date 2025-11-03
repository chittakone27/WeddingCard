// export default function Cover() {
//   return (
//     <div>
//     <img
//       src="./image/1.png"
//       alt="Wedding Cover"
//       className="position-absolute"
//       style={{
//         objectFit: "cover",
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)", // centers the GIF
//         zIndex: -1, // keep it behind everything
//         height: "100vh",
//         minWidth: "400px",
//         maxWidth: "800px",
//       }}
//     />
    
//       </div>
//   );
// }
export default function Cover() {
  return (
      <div
      style={{
        backgroundColor: "white",
      backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1, // 👈 behind content
      }}
    ></div>
    // <div
    //   style={{
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     height: "100vh",
    //     zIndex: -1,
    //   }}
    // >
    // </div>
  );
}
