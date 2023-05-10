import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(res, req) {
    if (res.method === "POST") {
        // console.log(res.body);
        let changeData = { title: res.body.title, content: res.body.content };
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db
            .collection("post")
            .updateOne(
                { _id: new ObjectId(res.body._id) },
                { $set: changeData }
            );
        return req.status(200).redirect(302, "/list");
    }
}
