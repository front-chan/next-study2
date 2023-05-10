import { connectDB } from "@/util/database";

// export const revalidate = 60;
// 예약변수를 쓰면 페이지단위 캐싱이 가능하다

export default async function Home() {
    const client = await connectDB;
    const db = client.db("forum");

    let result = await db.collection("post").find().toArray();
    console.log(result);

    // GET 요청 결과 캐싱
    // await fetch("/URL", { cache: "force-cache" });
    // 서버 자원 절약, 훨씬 빠르게 데이터를 가져올 수 있음
    // URL까지만 써도 캐싱 가능

    // cache : 'no-store'
    // 캐싱하지 않고 매번 서버로 요청해서 새거 가져옴

    // next : {revalidate : 60}
    // 60초마다 캐싱된 데이터를 갱신해줌

    // 캐싱된 데이터는 하드용량을 차지한다

    return <div>안녕</div>;
}
