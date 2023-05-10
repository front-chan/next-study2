import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");

    let result = await db.collection("post").find().toArray();
    console.log(result);

    return (
        <div className="list-bg">
            {result.map((r) => (
                <div className="list-item" key={r.id}>
                    <Link href={`/detail/${r._id}`}>
                        <h4>{r.title}</h4>
                    </Link>
                    <p>1월 1일</p>
                    <DetailLink />
                </div>
            ))}
        </div>
    );
}
