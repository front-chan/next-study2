import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(res, req) {
    if (res.method === "POST") {
        let session = await getServerSession(res, req, authOptions);

        console.log(res.body);
        const client = await connectDB;
        const db = client.db("forum");

        const user = await db
            .collection("post")
            .findOne({ _id: new ObjectId(res.body) });

        if (user.author === session.user.email) {
            let result = await db
                .collection("post")
                .deleteOne({ _id: new ObjectId(res.body) });
            return req.status(200).redirect(302, "/list");
        } else {
            return req.status(500).json("작성한 글이 아닙니다");
        }
    }
}
