import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(res, req) {
    if (res.method === "POST") {
        console.log(res.body);
        const client = await connectDB;
        const db = client.db("forum");
        let result = await db
            .collection("post")
            .deleteOne({ _id: new ObjectId(res.body) });
        return req.status(200).redirect(302, "/list");
    }
}
