module.exports = (sequelize, dataTypes) => {

    const alias = "Product";

    const cols = {

        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },

        name: {
            type: dataTypes.STRING(70),
            allowNull: false

        },

        price: {
            type: dataTypes.DECIMAL(3,2).UNSIGNED,
            allowNull: false

        },

        discount: {
            type: dataTypes.DECIMAL(3,2).UNSIGNED,
            allowNull: false
        },

        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        tasting: {
            type: dataTypes.TEXT
        },

        origin: {
            type: dataTypes.STRING(45) 
        },

        stock: {            
            type: dataTypes.INTEGER(10).UNSIGNED,                 
            allowNull: false 
        },

        categoryId: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }

        
    };

    const config = {
        tableName: "products",
        timestamps: true,  
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignkey: "categoryId"
        })
        Product.hasMany(models.Image, {
            as: "images",
            foreignkey: "productId"

        })
     }



    return Product;
}