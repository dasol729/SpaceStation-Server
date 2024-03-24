import dotenv from "dotenv";
import request from "supertest";
import express from "express";
import { tempRouter } from "./src/routes/temp.route.js";

dotenv.config();

const app = express();
app.use("/temp", tempRouter);

describe("Health Check API", () => {
  it('should respond with "HELLO, I\'m Healthy! NODE_ENV = test"', async () => {
    const response = await request(app).get("/temp");
    expect(response.status).toBe(200);
    expect(response.text).toBe("HELLO, I'm Healthy! NODE_ENV = test");
  });
});