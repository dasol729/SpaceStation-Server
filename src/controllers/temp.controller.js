import dotenv from "dotenv";

dotenv.config(); // .env 파일 사용 (환경 변수 관리)

export const tempTest = (req, res, next) => {
    res.send("HELLO, I'm Healthy! NODE_ENV = " + process.env.NODE_ENV);
};