module.exports = (sequelize, dataTypes) => {
    const alias = "Stock";

    const cols = {


    }

    const config = {
        tableName: "stocks"





    };






    const Stock = sequelize.define(alias, cols, config)


    return Stock



}