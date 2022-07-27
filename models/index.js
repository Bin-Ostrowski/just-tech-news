const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');


//create associations (a one-to-many relationship)
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//create reverse association - a post can belong to one user, but not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//many-to-many relastionship
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

//directly connect the Post and Vote models, and User to Vote models
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Vote };
