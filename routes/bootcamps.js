const express = require("express");
const { getBootCamps, getBootCamp, updateBootCamp, deleteBootCamp, createBootCamp, getBootcampsInRadius } = require("../controller/bootcamps")
const router = express.Router();

// Include other resource router 
const courseRouter = require("./courses");

// Re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter);

router
  .route("/")
  .get(getBootCamps)
  .post(createBootCamp);

router
  .route("/:id")
  .get(getBootCamp)
  .delete(deleteBootCamp)
  .put(updateBootCamp);

router  
  .route("/radius/:zipcode/:distance")
  .get(getBootcampsInRadius);

module.exports = router;






