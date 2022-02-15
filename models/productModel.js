module.exports = (sequelize, DataTypes) => {
  const productModel = sequelize.define("productModel", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
  });

  productModel.associate = (models) => {
    productModel.hasMany(models.reviewModel, {
      foreignKey: "product_id",
      onDelete: "cascade",
      as: "review",
    });
  };

  return productModel;
};

// TEXT는 많은 글을 쓸때 사용할 수 있음.
