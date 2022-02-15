module.exports = (sequelize, DataTypes) => {
  const reviewModel = sequelize.define("reviewModel", {
    rating: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  return reviewModel;
};
