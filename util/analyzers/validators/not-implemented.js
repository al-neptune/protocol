const validate = async (code) => {
  if (code.toLowerCase().indexOf('not implemented') > -1 || code.toLowerCase().indexOf('to-do') > -1) {
    return '\x1b[31m' + '* Error: implement the missing functionalities' + '\x1b[0m'
  }

  return null
}

module.exports = validate
