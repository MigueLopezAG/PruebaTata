import {Router} from 'express'
import weatherRoute from './weatherRoute.js'
import  eventRouter from './eventRoute.js'
import  userRouter from './userRoute.js'

const route = Router();

route.use('/weather', weatherRoute);
route.use('/event', eventRouter);
route.use('/user', userRouter);

route.use(function(err, res, next) {
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