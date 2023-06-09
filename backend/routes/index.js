var express = require("express");
const {
  Register,
  Login,
  Test,
  Admin,
} = require("../controllers/users.controllers");
var router = express.Router();
const passport = require("passport");
const { ROLES, inRole } = require("../security/Rolemiddleware");
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require("../controllers/profile.controllers");
const {  AddEvent} = require("../controllers/Event.controller");
/* users routes. */
router.post("/register", Register);
router.post("/login", Login);
  
/* add profile route */
router.post("/profiles", FindAllProfiles);
/* get all profiles */


router.post("/profiles", 
passport.authenticate("jwt", { session: false }),
AddProfile);




router.get("/profiles", 
passport.authenticate("jwt", { session: false }),
inRole(ROLES.ADMIN),FindAllProfiles);
/* get one profiles */
router.get("/profile", 
passport.authenticate("jwt", { session: false }),
FindSingleProfile);
/* delete profiles */
router.delete("/profiles/:id", 
passport.authenticate("jwt", { session: false }),inRole(ROLES.ADMIN),
DeleteProfile);



module.exports = router;