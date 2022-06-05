const User = require('../models/users')
module.exports = {

    all(req, res, next) {
        const limit = parseInt(req.param.limit) || ''
        console.log('all')
        User.find({}).limit()
            .then(user => res.status(200).send(user))
            .catch(next)
    },
   createUser(req, res, next) {
        const userProps = req.body;
        User.create(userProps)
            .then(user => res.status(200).send(user))
            .catch(next)

        },
    edit(req, res, next) {
        const userId = req.param.id
        const userProps = req.body
        User.findByIdAndUpdate({ _id: userId }, userProps)

            .then(() => User.findById({ _id: userid }))
            .then(userProps => res.status(200).send(userProps))
            .catch(next)
    },
    delete(req, res, next) {
        const userId = req.param.id
        User.findByIdAndRemove({ _id: userId })
            .then(user => res.status(204).send(user))
            .catch(next)

    },
    details(req, res, next) {
        const userId = Number(req.param.id)
        console.log(req.param.id)
        User.findById({ id: userId })
            .then(user => res.status(200).send(user))
            .catch(next)

    }

}
