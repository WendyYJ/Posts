const postModel = require('../models/post');
module.exports = function(req,res,next) {
    let {id} = req.params;
    id = Number(id);
    req.params.id = id;
    if (postModel.doesIdExist(id)) {
        return res.status(404).json({error:'post id not found'});
    }
    next();
}