const express = require('express'),
    router = express.Router();
router
    .get("/get", function (req, res) {
        const data = {
            code: 200,
            message: "这个是get",
            body:req.body
        };
        res.json(data);
    })
    .post('/post', function (req, res, next) {
        console.log(req.body)
        const data = {
            code: 200,
            message: "这个是post",
            body:req.body
        };
        res.json(data);
    });
module.exports = router;