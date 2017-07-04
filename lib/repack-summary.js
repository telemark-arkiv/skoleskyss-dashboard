'use strict'

module.exports = data => {
  const schools = data.map(school => Object.assign({name: school._id, total: school.total}))
  schools.sort()
  return schools
}
