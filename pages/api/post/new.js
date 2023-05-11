import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(res, req) {
    let session = await getServerSession(res, req, authOptions);
    // console.log(session);

    if (session) {
        res.body.author = session.user.email;
    }
    // console.log(res.body);

    if (res.method === "POST") {
        // console.log(res.body);
        if (res.body.title === "" || res.body.content === "") {
            return req.status(500).json("제목 또는 내용을 입력해주세요");
        } else {
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db.collection("post").insertOne(res.body);
            // return req.status(200).json("처리완료");
            return req.status(200).redirect(302, "/list");
        }
    }
}
