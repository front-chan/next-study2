import { connectDB } from "@/util/database";

export default async function handler(res, req) {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    req.status(200).json(result);
}
