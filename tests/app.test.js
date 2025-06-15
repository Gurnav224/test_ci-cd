// test/app.test.js
const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it("should return Hello, CI/CD!", async () => {
        const res = await request(app).get("/");
        expect(res.text).toBe("Hello, CI/CD!");
        expect(res.statusCode).toBe(200);
    });
});

describe("GET /hello", () => {
    it("should return hello", async () => {
        const res = await request(app).get("/hello");
        expect(res.text).toBe("hello");
        expect(res.statusCode).toBe(200);
    });
});

describe("GET /unknown", () => {
    it("should return 404 for unknown routes", async () => {
        const res = await request(app).get("/unknown");
        expect(res.statusCode).toBe(404);
    });
});


describe("User Routes", () => {
  it("GET /user should return user object", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ name: "Gurnav", role: "Developer" });
  });

  it("POST /user should return created message", async () => {
    const res = await request(app).post("/users").send({});
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User created");
  });
});