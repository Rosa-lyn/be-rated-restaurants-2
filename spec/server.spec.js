const request = require("supertest");
const app = require("../server");
const client = require("../databases/Client");

describe("app", () => {
  afterAll(() => client.end());
  describe("invalid paths", () => {
    test("ALL: 404 - returns 404 not found for a non-existant path", () => {
      return request(app)
        .get("/aaslkdmlm/jkl")
        .expect(404)
        .then((res) => {
          //   console.log(res.body);
          //   expect(res.body.status).toBe(404);
          expect(res.body.msg).toBe("Path not found!");
        });
    });
  });

  describe("/api", () => {
    describe("/areas", () => {
      test('POST: 201 - area is added to the "areas_schema" table and sent back to the user', () => {
        return request(app)
          .post("/api/areas")
          .send({
            area_name: "Altrincham",
          })
          .expect(201)
          .then((res) => {
            expect(res.body.area.area_name).toEqual("Altrincham");
          });
      });
      // test("POST: 400", () => {});
    });
  });
});
