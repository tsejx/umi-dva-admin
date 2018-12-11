

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
  // plugin: [
  //   require('dva-logger')(),
  // ]
};

