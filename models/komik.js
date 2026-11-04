module.exports = (sequelize,DataTypes) => {
    const Komik = sequelize.define("komik",{
        id: {
            types: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        title: {
            type: DataTypes,STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        author:{
            type: DataTypes.STRING,
        }
    });
    return Komik;
};