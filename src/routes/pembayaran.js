const router = require('express').Router();
const { pembayaran } = require('../controllers');

// mengeluarkan semua daftar pembayaran
router.get('/', pembayaran.getDataPembayaran);

// show data berdasarkan parameter 'id'
router.get('/:id', pembayaran.getDataPembayaranById);

// menambah data pembayaran
router.post('/add', pembayaran.addDataPembayaran);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', pembayaran.editDataPembayaran);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', pembayaran.deleteDataPembayaran);

module.exports = router;