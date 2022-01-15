
const User = require('../models/user');
const UserDetail = require('../models/user_details');

const userdetail = UserDetail.find({});

// module.exports.home = async function(req, res){
   
//     try{
//         let posts = await Post.find({})
//         .sort('-createdAt')
//         .populate('user')
//         .populate({
//             path: 'comments',
//             populate: {
//                 path: 'user'
//             },
//             populate: {
//                 path: 'likes'
//             }
//         }).populate('likes');
    
//         let users = await User.find({});
    
//         return res.render('home', {
//             title: "Home",
//             posts: posts,
//             all_users: users
//         });
//     }catch(err){
//         console.log('Error ',err);
//         return;
//     }
// };

module.exports.home = function(req, res){
    return res.render('home', {
            title: "Home",
            userdetail: userdetail
         });
}