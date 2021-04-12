
module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		'Task', 
	{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN,
   /*  createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE */ 
	
	},{
    tableName: 'tasks',
    timestamp: false
	});
	return Task;
};