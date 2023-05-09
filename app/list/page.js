import { connectDB } from "@/util/database";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");

    let result = await db.collection("post").find().toArray();
    console.log(result);

    return (
        <div className="list-bg">
            {result.map((r) => (
                <div className="list-item">
                    <h4>{r.title}</h4>
                    <p>{r.content}</p>
                </div>
            ))}

            <div className="list-item">
                <h4>글제목</h4>
                <p>1월 1일</p>
            </div>
        </div>
    );
}
