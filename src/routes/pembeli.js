const router = require('express').Router();
const { pembeli } = require('../controllers');

// mengeluarkan semua daftar pembeli
router.get('/', pembeli.getDataPembeli);

// show data berdasarkan parameter 'id'
router.get('/:id', pembeli.getDataPembeliById);

// menambah data pembeli
router.post('/add', pembeli.addDataPembeli);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', pembeli.editDataPembeli);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', pembeli.deleteDataPembeli);

module.exports = router;