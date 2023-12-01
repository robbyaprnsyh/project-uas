const router = require('express').Router();
const { transaksi } = require('../controllers');

// mengeluarkan semua daftar transaksi
router.get('/', transaksi.getDataTransaksi);

// show data berdasarkan parameter 'id'
router.get('/:id', transaksi.getDataTransaksiById);

// menambah data transaksi
router.post('/add', transaksi.addDataTransaksi);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', transaksi.editDataTransaksi);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', transaksi.deleteDataTransaksi);

module.exports = router;