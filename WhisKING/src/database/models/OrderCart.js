module.exports = (sequelize, dataTypes) => {
    const alias = "OrderCart";

    const cols = {

        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true, 
            allownull: false
        },

        state: {
            type: dataTypes.BOOLEAN,
            allowNull: false,

        },

        userId: {
            type: dataTypes.INTEGER(10).UNSIGNED,  
            allownull: false,
        }


    }

    const config = {
        tableName: "order_carts",
        timestamps: true, 
    };

    const OrderCart = sequelize.define(alias, cols, config);

    OrderCart.associate = models => {
        OrderCart.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })

        OrderCart.hasMany(models.OrderItem, {
            as: "orderItems",
            foreignKey: "orderCartId"
        })
    }

    return OrderCart;
}