require('ses')
module.exports = {
  before: () => {
     lockdown({ domainTaming: 'unsafe' });
     return 'environment locked down.'
 }
}