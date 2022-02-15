module.exports = (sequelize, DataTypes) => {
  const reviewModel = sequelize.define("reviewModel", {
    rating: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  reviewModel.associate = (models) => {
    reviewModel.belongsTo(models.productModel, {
      foreignKey: "product_id",
      onDelete: "cascade",
      as: "product",
    });
  };

  return reviewModel;
};
