"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./Modal.client"), {
  loading: () => <p style={{ marginTop: 12 }}>모달 준비 중이다</p>,
});

export default function ModalOnDemand() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: 16 }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid #ddd",
          cursor: "pointer",
          background: "white",
        }}
      >
        모달 열기
      </button>

      {open ? <Modal onClose={() => setOpen(false)} /> : null}
    </div>
  );
}

