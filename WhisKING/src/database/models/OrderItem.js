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
        }
    };

    const config = {
        tableName: "order-items",
        timestamps: true,     // tabla pivot
        
    };

    const OrderItem = sequelize.define(alias, cols, config);

    OrderItem.associate = models => {
        OrderItem.belongsTo(models.OrderCart, {
            as: "orderCart",
            foreingKey: "orderCartId"
        })

        OrderItem.belongsTo(models.Product, {
            as: "product",
            foreingKey: "productId"
        })
    }

    return OrderItem;



}