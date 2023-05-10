export default async function handler(res, req) {
    let a = new Date();
    return req.status(200).json(a);
}
