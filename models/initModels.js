const User = require('./users.model');
const Repair = require('./repairs.model');

const initModel = () => {
  // un usuario puede tener varias reparaciones
  User.hasMany(Repair, { foreingKey: 'userid' });
  Repair.belongsTo(User, { foreingKey: 'userid' });
};

module.exports = initModel;
