const validator = require('../helpers/validate');
const saveMission = async (req, res, next) => {
    const validationRule = {
        "program": "required|string",
        "number": "required|string",
        "launchDate": "required|string",
        "achievement": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}
module.exports = {
    saveMission
};