import { connectDB } from "@/util/database";

export default async function handler(res, req) {
    if (res.method === "POST") {
        console.log(res.body);
        if (res.body.id === "" || res.body.pw === "") {
            return req.status(500).json("아이디 또는 비밀번호를 입력해주세요");
        } else {
            // const client = await connectDB;
            // const db = client.db("forum");
            // let checkid = await db
            //     .collection("user")
            //     .findOne({ _id: res.body.id });
            // if (res.body.id === checkid) {
            //     return req.status(500).json("사용중인 아이디입니다");
            // } else {
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db.collection("user").insertOne(res.body);
            // return req.status(200).json("처리완료");
            return req.redirect(302, "/list");
            // }
        }
    }
}
