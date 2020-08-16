module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "マイナコネクト";
      return args;
    });
    config.optimization.minimizer("terser").tap((args) => {
      args[0].sourceMap = false;
      return args;
    });
  },
};
