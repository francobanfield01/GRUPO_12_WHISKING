module.exports = (sequelize, dataTypes) => {

    const alias = "Image";

    const cols = {

        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true, 
            allownull: false
        },

        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },

        productId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }    
    };

    const config = {
        tableName: "images",
        timestamps: true
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = models => {
        Image.belongsTo(models.Product), {
            as: "product",
            foreignkey: "productId"
        }
     }

    return Image;
}