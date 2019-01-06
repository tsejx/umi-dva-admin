/*
 * @Author: tsejx
 * @Date: 2019-01-06 20:58:29
 * @Last Modified by: tsejx
 * @Last Modified time: 2019-01-06 20:58:29
 */

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

