module.exports = (sequelize, dataTypes) => {

    const alias = "Address";

    const cols = {

        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },

        street: { 
            type: dataTypes.STRING(70),
        
        },

        number: {
            type: dataTypes.INTEGER(10).UNSIGNED,
           
        },

        city: {
            type: dataTypes.STRING(45),
           
        },

        province: {
            type: dataTypes.STRING(45),
           
        },

        postalCode: {
            type: dataTypes.STRING(30)
        },

        userId: {
            type: dataTypes.INTEGER(10).UNSIGNED,    
            allowNull: false
        }
    };
    
    const config = {
        tableName: "addresses", 
        timestamps: true       
    };

    const Address = sequelize.define(alias, cols, config);
    
    Address.associate = models => {
        Address.belongsTo(models.User, {
            as: "user",
            foreingKey: "userId"
        })

        
    }
    
    return Address;
}