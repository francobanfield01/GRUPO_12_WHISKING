module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,   // no le puso unsigned en la tabla mysql
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        lastName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(70),
            allowNull: false,
            unique: true
        },
        pass: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        dateOfBirth: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        cellPhone: {
            type: dataTypes.STRING(30).UNSIGNED,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100)
        },
        rol: {
            type: dataTypes.BOOLEAN(1).UNSIGNED,
            allowNull: false
        }
    }
    
    const config = {
        tableName: "users",
        timestamps: true
        
    };

    const User = sequelize.define(alias, cols, config)
    
    
    return User;
}