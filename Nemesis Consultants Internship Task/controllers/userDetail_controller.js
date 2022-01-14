const UserDetail = require('../models/user_details');

module.exports.createUserDetail = async function(req, res){
    try{
        let userdetail = await UserDetail.create({
            username: req.body.username,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address,
            userdetail: req.user._id
        });
        return res.render('home', {
            title: "Users",
            userdetail: userdetail
        });


    }catch(err){
        req.flash('error', err);
        console.log('Error', err);
        return res.redirect('back');
    }
}

module.exports.createUser = function(req, res){
    return res.render('users', {
        title: "Users",
        user: user
    });
};


module.exports.destroyUserDetails = async function(req, res){
    try{
        let userdata = await UserDetail.findById(req.params.id);
        if(userdata.user == req.user.id){

            userdetail.remove();


            if(req.xhr){
                return res.status(200).json({
                    data: {
                        user_id: req.params.id
                    },
                    message: "User Data Deleted!"    
                });
            }

            req.flash('success', 'User Data are deleted!');
            return res.redirect('back');
        }else{
            req.flash('error', 'You cannot delete this data!');
            return res.redirect('back');
        }
    }catch(err){
        console.log('Error', err);
        req.flash('error', err);
        return res.redirect('back');

    }
}