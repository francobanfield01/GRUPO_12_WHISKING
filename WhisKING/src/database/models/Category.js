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
        }
    };

    const config = {
        tableName: "categories",
        timestamps: true   
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