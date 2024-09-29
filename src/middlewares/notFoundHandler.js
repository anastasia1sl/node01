const notFoundHandler = (req, res) => {
  // error for non existing routes
  res.status(404).json({
    message: `${req.url} not found`,
  });
};

export default notFoundHandler;
