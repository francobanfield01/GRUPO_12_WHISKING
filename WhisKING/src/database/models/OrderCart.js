module.exports = (sequelize, dataTypes) => {
    const alias = "OrderCart";

    const cols = {


    }

    const config = {
        tableName: "order_carts"





    };






    const OrderCart = sequelize.define(alias, cols, config)


    return OrderCart



}