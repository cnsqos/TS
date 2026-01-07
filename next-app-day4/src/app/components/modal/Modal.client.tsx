"use client"

//모달 창 만들기

type ModalProps = {
  onClose: () => void;
};

export default function ModalClient({ onClose }: ModalProps) {
  return (

    // role = "dialog" : 이 요소가 대화상자(dialog)임을 스크린 리더에 알린다.
    // 이 영역을 일반 div가 아닌 "모달 창"으로 인식하게 된다.
    // aria-modal="true" : 이 dialog가 모달임을 명시한다.
    // true면 배경 콘텐츠는 비활성화 된것으로 인식한다.
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 420,
          borderRadius: 14,
          background: "white",
          padding: 16,
          border: "1px solid #ddd",
        }}
      >
        <h3 style={{ marginTop: 0 }}>동적 로드된 모달이다</h3>
        <p>이 컴포넌트는 모달을 열 때 import되어 청크로 내려온다</p>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #ddd",
              cursor: "pointer",
              background: "white",
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}