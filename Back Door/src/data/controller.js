const pool = require('../../db')
const queries = require('./queries')

const getData = (req, res) => {
  pool.query(queries.getData, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getDatabyGID = (req, res) => {
  const gid = req.params.gid
  console.log(gid);
  pool.query(queries.getDatabyGID, [gid], (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const convert = (req, res) => {
  pool.query(queries.convert, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getProvince = (req, res) => {
  pool.query(queries.getProvince, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getProvinceName = (req, res) => {
  const gid = req.params.gid
  pool.query(queries.getProvinceName, [gid], (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const getImage = (req, res) => {
  res.sendFile('./gambarCoba.jpg', { root: __dirname + '/asset'});
};

module.exports = {
  getData,
  getDatabyGID,
  convert,
  getProvince,
  getProvinceName,
  getImage
}