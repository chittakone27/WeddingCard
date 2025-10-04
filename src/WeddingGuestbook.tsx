// WeddingGuestbook.tsx
import React from "react";
import FacebookComments from "./FacebookComments";

const WeddingGuestbook: React.FC = () => {
  return (
    <div className="wedding-guestbook my-5">
      <h2 className="text-center mb-4">ບັນທຶກເຂົ້າມາຢ້ຽມ</h2>

      {/* URL ของหน้าปัจจุบัน */}
      <FacebookComments url={window.location.href} numPosts={5} />
    </div>
  );
};

export default WeddingGuestbook;
