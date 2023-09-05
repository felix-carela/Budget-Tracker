var express = require("express");
var router = express.Router();
const passport = require("passport");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Budget Tracker Application" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/users/index", function (req, res, next) {
  res.render("users/index", { title: "Budget Tracker Application" });
});

router.get(
  "/oauth2callback",
  passport.authenticate("google", {    
    successRedirect: "/users/index",  // Redirect to this route on successful authentication
    failureRedirect: "/failure"   // Redirect to this route if authentication fails

  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;