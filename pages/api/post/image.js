import aws from "aws-sdk";

export default async function handler(res, req) {
    // 세팅용 코드
    aws.config.update({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
        region: "ap-northeast-2",
        signatureVersion: "v4",
    });

    const s3 = new aws.S3();
    // createPresignedPost => Presigned URL 발급
    const url = await s3.createPresignedPost({
        Bucket: process.env.BUCKET_NAME,
        Fields: { key: res.query.file }, // 파일명 기재
        Expires: 60,
        Conditions: [
            ["content-length-range", 0, 1048576],
            // 파일용량 1MB까지 제한
        ],
    });

    req.status(200).json(url);
}
