export default async function handler(res, req) {
    console.log(123);
    console.log(res.body);
    // if (req.method == "POST") {
    return req.status(200).json("처리완료");
    // }
}
