const User = require("../models/User")

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getRSVP: (req, res) => {
        res.render('rsvp.ejs')
    },
    putRSVP: async (req, res) => {
        // console.log(req)
        console.log(req.body.rsvpAnswer)
        try{
            await User.findOneAndUpdate({_id: req.user.id}, {
                attending: req.body.rsvpAnswer
            })
            console.log('success')
            res.json('success')
        } catch (err) {
            console.log(err)
        }
    },
    getSuccess: (req, res) => {
        res.render('rsvpsuccess.ejs')
    }
}