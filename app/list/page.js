import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");

    let result = await db.collection("post").find().toArray();
    console.log(result);

    return (
        <div className="list-bg">
            {result.map((r) => (
                <div className="list-item" key={r.id}>
                    <h4>{r.title}</h4>
                    <p>1월 1일</p>
                    <Link href={`/detail/${r._id}`}>상세보기</Link>
                </div>
            ))}
        </div>
    );
}
