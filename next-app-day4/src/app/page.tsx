import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Image 태그의 src 탐색경로 : public 폴더 부터이다 */}
      <Image
        src="/dog.png"
        alt="샘플 이미지"
        width={300}
        height={300}
      />

     <hr>
      {/* 외부 링크를 통한 이미지 사용은 보안or성능 때문에 허용 도메인을 설정*/}
      
        <Image
          src="https://www.pngarts.com/ko/explore/78057/download/78056"
          alt="외부 링크 이미지"
          width={300}
          height={300}
        />
     </hr>
    </div>
  );
}

