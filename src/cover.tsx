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
        backgroundColor: "rgba(251, 252, 252)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      {/* You can add other content here if needed */}
    </div>
  );
}
