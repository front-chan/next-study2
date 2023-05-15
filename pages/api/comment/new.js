import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(res, req) {
    let session = await getServerSession(res, req, authOptions);
    if (res.method === "POST") {
        console.log(session.user.email);
        res.body = JSON.parse(res.body);
        console.log(res.body);
        const comment = {
            content: res.body.comment,
            parent: new ObjectId(res.body._id),
            author: session.user.email,
        };
        const db = (await connectDB).db("forum");
        await db.collection("comment").insertOne(comment);
        req.status(200).json("저장완료");
    }
}
