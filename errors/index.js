
const invalidPaths = (req, res, next) => {
    res.status(404).send({ msg: "Path not found!" });
  }

const Error400 = (err,req,res,next) => {
      console.log(err, "<---- ")
      res.status(400).send(err)
}

module.exports = { Error400, invalidPaths}