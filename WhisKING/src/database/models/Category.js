module.exports = (sequelize, dataTypes) => {
    const alias = "Category";

    const cols = {


    }

    const config = {
        tableName: "categories"





    };






    const Category = sequelize.define(alias, cols, config)


    return Category



}