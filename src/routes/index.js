const router = require('express').Router();

//another route below this line
const supplierRoute = require('./supplier');
const pembeliRoute = require('./pembeli');
const barangRoute = require('./barang');
const transaksiRoute = require('./transaksi');
const pembayaranRoute = require('./pembayaran');

router.use('/supplier', supplierRoute);
router.use('/pembeli', pembeliRoute);
router.use('/barang', barangRoute);
router.use('/transaksi', transaksiRoute);
router.use('/pembayaran', pembayaranRoute);
// other route
module.exports = router;