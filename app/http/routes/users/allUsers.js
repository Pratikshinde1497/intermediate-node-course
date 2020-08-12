/* jshint -W033 */

const mongoose = require('mongoose');

const User = require('../../../models/User');
mongoose.connect('mongodb://localhost/blog-post')


module.exports = (req, res) => {
    User.find((err, data)=>{
        if(err){
            res.status(500).json({ 
                success : false,
                message : err
            });
        } 
        else if(!data){
            res.status(404).json({
                success : false,
                message :  'not Found'});
        }
        else {
            res.status(200).json({ 
                success: true,
                message : data });
            res.end()
        }
    })
};