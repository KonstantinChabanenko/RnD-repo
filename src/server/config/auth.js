let token = 0

module.exports = {
  set: (newValue) => token = newValue,
  get: () => token,
}