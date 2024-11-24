const underConstruction = (req, res, next) => {
  res.status(503).render("under-construction");
  //we don't want to run other middlware so not using next()
  //   next();
};

export default underConstruction;
