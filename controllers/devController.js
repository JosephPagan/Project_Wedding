const User = require("../models/User")

module.exports = {
    getInput: async (req, res) => {
        try{
            const userData = await User.find()
            // console.log(userData)
            res.render('input.ejs', {userData: userData})
        } catch (err) {
            console.log(err)
        }
    }
}