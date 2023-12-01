const supplier = require('./supplierController')
const pembeli = require('./pembeliController')
const barang = require('./barangController')
const transaksi = require('./transaksiController')
const pembayaran = require('./pembayaranController')
// other controller
 
module.exports = {
    supplier,
    pembeli,
    barang,
    transaksi,
    pembayaran
}