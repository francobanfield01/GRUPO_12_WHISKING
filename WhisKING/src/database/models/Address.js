module.exports = (sequelize, datatypes) => {
    const alias = "PersonalInformation";
    const cols = {
        id: {

        }
    }
    
    const config = {
        tableName: "personal_information"
    };

    const PersonalInformation = sequelize.define(alias, cols, config)
    
    
    return PersonalInformation;
}