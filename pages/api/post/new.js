import { connectDB } from "@/util/database";

export default async function handler(res, req) {
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
