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
        allowNull: false
        },

        number: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },

        city: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        province: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        postalCode: {
            type: dataTypes.STRING(30)
        },

        userId: {
            type: dataTypes.INTEGER(10).UNSIGNED,    ///en la base no se puso que es unsigned
            allowNull: false
        }
    };
    
    const config = {
        tableName: "addresses", 
        timestamps: false       
    };

    const Address = sequelize.define(alias, cols, config);
        
    return Address;
}