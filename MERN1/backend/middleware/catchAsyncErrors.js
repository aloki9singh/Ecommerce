module.exports = (asyncCatcher) => (req, res, next) => {
  Promise.resolve(asyncCatcher(req, res, next)).catch(next);
};
