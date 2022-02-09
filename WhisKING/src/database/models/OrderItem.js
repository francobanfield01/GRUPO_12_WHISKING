module.exports = (sequelize, dataTypes) => {
    const alias = "OrderItem";

    const cols = {


    }

    const config = {
        tableName: "order-item"





    };






    const OrderItem = sequelize.define(alias, cols, config)


    return OrderItem



}