const getData = "SELECT *, ST_AsGeoJSON(geom) AS geom FROM penduduk_provinsifix"

const getDatabyGID = `
SELECT *, ST_AsGeoJSON(geom) AS geom 
FROM penduduk_provinsifix 
WHERE gid = $1`

const convert = `
SELECT json_build_object(
  'type',       'Feature',
  'geometry',   ST_AsGeoJSON(geom)::json,
  'properties', json_build_object(
    'gid', gid,
    'id_provinsi', id_provins,
    'provinsi', provinsi,
    'Penduduk_2018', "Penduduk_2018"
   )
)
FROM penduduk_provinsifix;`

const getProvince = `
SELECT gid,provinsi
FROM penduduk_provinsifix
WHERE gid IN (1, 2, 3);`

const getProvinceName = `
SELECT json_build_object(
  'type',       'Feature',
  'geometry',   ST_AsGeoJSON(geom)::json,
  'properties', json_build_object(
    'gid', gid,
    'id_provinsi', id_provins,
    'provinsi', provinsi,
    'Penduduk_2018', "Penduduk_2018"
   )
)
FROM penduduk_provinsifix
WHERE gid = $1;`

module.exports = {
  getData,
  getDatabyGID,
  convert,
  getProvince,
  getProvinceName
}