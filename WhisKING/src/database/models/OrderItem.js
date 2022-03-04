module.exports = (sequelize, dataTypes) => {
    const alias = "OrderItem";

    const cols = {

        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true, 
            allownull: false
        },

        quantity: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allownull: false,
        },

        orderCartId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allownull: false,
        },

        productId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allownull: false,
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
        tableName: "order-items",   // tabla pivot
        
    };

    const OrderItem = sequelize.define(alias, cols, config);

    return OrderItem;



}