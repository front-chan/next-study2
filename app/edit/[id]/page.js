import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    const client = await connectDB;
    const db = client.db("forum");

    let result = await db
        .collection("post")
        .findOne({ _id: new ObjectId(props.params.id) });
    console.log(result);

    return (
        <div className="p-20">
            <h4>글수정</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <input
                    style={{ display: "none" }}
                    name="_id"
                    defaultValue={result._id.toString()}
                />
                <button type="submit">수정</button>
            </form>
        </div>
    );
}
