var request = require("request");
var helloWorld = require("../index.js")
var base_url = "http://localhost:3000/user"

describe("test3", function() {
  describe("GET /user", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("test4", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toContain("Second");
         helloWorld.fun() ;
        done();
      });
    });
  });
});

