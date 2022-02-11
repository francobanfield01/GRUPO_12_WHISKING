module.exports = (sequelize, datatypes) => {
    const alias = "User";
    const cols = {
        id: {
            type: datatypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: datatypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: datatypes.STRING(45),
            allowNull: false
        },
        email: {
            type: datatypes.STRING(70).UNSIGNED,
            allowNull: false,
            unique: true
        },
        pass: {
            type: datatypes.STRING(70),
            allowNull: false
        },
        date_of_birth: {
            type: datatypes.DATEONLY,
            allowNull: false
        },
        phone: {
            type: datatypes.STRING(30).UNSIGNED,
            allowNull: false
        },
        image: {
            type: datatypes.STRING(100)
        },
        cellphone: {
            type: datatypes.STRING(30).UNSIGNED,
            allowNull: false
        },
        createdAt: {

        },
        updatedAt: {

        }
    }
    
    const config = {
        tableName: "users",
        
    };

    const User = sequelize.define(alias, cols, config)
    
    
    return User;
}