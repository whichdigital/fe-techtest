var app = require("../app/app");

describe("app", function() {
  describe("#init", function() {
    it("should be defined", function() {
      expect(app.init).toBeDefined();
    });
  });
});
