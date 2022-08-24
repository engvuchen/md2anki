const { exec } = require('child_process');
function promisify(fn) {
  return function promisifyFn() {
    return new Promise((resolve, reject) => {
      let args = Array.from(arguments);
      args.push((err, ...data) => {
        if (err) return reject(err);
        resolve(...data);
      });
      fn.apply(this, args);
    });
  };
}
const asyncExec = promisify(exec);

module.exports = {
  asyncExec,
};
