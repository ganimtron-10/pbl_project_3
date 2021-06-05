import express from 'express'
import User from '../models/user.modal.js'

const router = express.Router()
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err))
})

router.route('/add').post((req,res) => {
    const username = req.body.username;
    // const password = req.body.password;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: '+err))
})

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: '+err))
})

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User Deleted!'))
        .catch(err => res.status(400).json('Error: '+err))
})

router.route('/update/:id').post((req,res) => {
    const newUsername = req.body.username
    User.findByIdAndUpdate(req.params.id,{username: newUsername})
        .then(() => res.json('User Updated!'))
        .catch(err => res.status(400).json('Error: '+err))
})

export default router