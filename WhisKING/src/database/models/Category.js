module.exports = (sequelize, dataTypes) => {

    const alias = "Category";

    const cols = {

        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true, 
            allownull: false
        },

        title: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        image: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        createdAt: {
            type: dataTypes.Date,
            allowNull: true            
        },  

        updatedAt: {
            type: dataTypes.Date,
            allowNull: true
        }
    };

    const config = {
        tableName: "categories"   
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: "products",
            foreignkey: "categoryId"
        })
     }

    return Category;
}