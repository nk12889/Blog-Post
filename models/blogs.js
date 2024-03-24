const Sequelize = require('sequalize');

const sequelize = require('../util/database');


const Blogs = sequelize.define('blogs',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      blog_title : Sequelize.STRING,
      blog_author : Sequelize.STRING,
      blog_content: Sequelize.STRING
})