import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";
// 해당 페이지를 보여줄 때 dynamic rendering
// dynamic rendering 단점 : 서버 / DB 부담이 커지므로 캐싱기능 사용 가능
// 캐싱 : 결과를 잠깐 저장해두고 재사용
// 페이지 캐싱 : 페이지 완성본을 잠깐 저장해두고 재사용
// GET 요청 결과 캐싱 : GET 요청 결과를 잠깐 저장해두고 재사용

// export const dynamic = 'force-static'
// static rendering

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");

    let result = await db.collection("post").find().toArray();
    console.log(result);

    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    );
}
