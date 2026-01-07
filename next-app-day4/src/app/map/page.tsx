import MapLoader from "@/components/map/MapLoader.client";

export default function MyPage(){
    return(
        <main style={{padding : 24}}>
            <h1>Map 예제</h1>
            <p>window를 쓰는 컴포넌트를 ssr:false로 클라이언트에서만 렌더링한다.</p>

            <div style={{marginTop : 16}}>
                <MapLoader />
            </div>
        </main>
    )
}