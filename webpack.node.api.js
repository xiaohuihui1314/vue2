const express = require('express'),
    router = express.Router();
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "x-requested-with,content-type,Authorization");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
router
    .get("/get", function (req, res) {
        const data = {
            code: 200,
            message: "这个是get",
            body: req.body
        };
        res.json(data);
    })
    .post('/post', function (req, res, next) {
        console.log(req.body)
        const data = {
            code: 200,
            message: "这个是post",
            body: req.body
        };
        res.json(data);
    });
module.exports = router;