import Image from "next/image";
import dynamic from "next/dynamic"

const SlowHello = dynamic(
  () => import("./components/SlowHello.client"),
  {
    loading: () => <p>dynamic 청크 로딩 중이다...</p>,
  }
);

export default function Home() {
  return (
    <div>
      Image 태그의 src 탐색경로 : public 폴더 부터이다
      <Image
        src="/dog.png"
        alt="샘플 이미지"
        width={300}
        height={300}
      />

      {/* hr은 닫는 태그가 없는 void element */}
      <hr />

      {/* 외부 링크를 통한 이미지 사용은 보안 or 성능 때문에 허용 도메인을 설정 */}
      <Image
        src="https://www.pngarts.com/files/3/Puppies-PNG-Image.png"
        alt="외부 링크 이미지"
        width={300}
        height={300}
      />

      <div
        style={{
          position: "relative",
          width: 300,
          height: 200,
          border: "1px solid #ccc",
        }}
      >
        <Image
          src="/dog.png"
          alt="채우기 이미지"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 300,
        }}
      >
        <Image
          src="/banner.jpg"
          alt="반응형 배너"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
