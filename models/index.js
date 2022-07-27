const User = require('./User');
const Post = require('./Post');


//create associations (a one-to-many relationship)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//create reverse association - a post can belong to one user, but not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
})


module.exports = { User, Post };
