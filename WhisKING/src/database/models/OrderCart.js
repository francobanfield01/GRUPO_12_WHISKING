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
            type: dataTypes.BOOLEAN(1).UNSIGNED,
            allowNull: false,

        },

        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,  // ACA NO SE SI VAMOS A TENER PROBLEMAS QUE NO TIENE UNSIGNED EL USERiD QUE ESTA DEFINIDO EN LA TABLA USERS
            allownull: false,
        }


    }

    const config = {
        tableName: "order_carts",
    };

    const OrderCart = sequelize.define(alias, cols, config);

    return OrderCart;
}