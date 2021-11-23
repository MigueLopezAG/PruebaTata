const route = require('express').Route();

route.use('/weather', require('./weatherController').default);

route.use(function(err, req, res, next) {
    if (err.name === 'ValidationError') {
        res.status(422).json({
            errors: Object.keys(err.errors).reduce(function(errors, key) {
                errors[key] = err.errors[key].message;

                return errors;
            }, {})
        });
    }

    return next(err);
});

export default route;