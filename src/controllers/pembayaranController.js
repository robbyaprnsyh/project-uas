const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataPembayaran = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM pembayaran", function (error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "gagal",
        });
    }
}

// menampilkan data by id
const getDataPembayaranById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM pembayaran WHERE id = ?";
        connection.query(query, [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });

    if (data.length > 0) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "Data tidak ditemukan",
        });
    }
}

// menambahkan data
const addDataPembayaran = async (req, res) => {
    let data = {
        id: req.body.id,
        tgl_bayar: req.body.tgl_bayar,
        total_bayar: req.body.total_bayar,
        id_transaksi: req.body.id_transaksi
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO pembayaran SET ?';
        connection.query(query, [data], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil menambah data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal menambah data",
        });
    }
}

// mengedit data 
const editDataPembayaran = async (req, res) => {
    let id = req.params.id;
    let data = {
        id: req.body.id,
        tgl_bayar: req.body.tgl_bayar,
        total_bayar: req.body.total_bayar,
        id_transaksi: req.body.id_transaksi
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE pembayaran SET ? where id = ?';
        connection.query(query, [data, id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil edit data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal edit data",
        });
    }
}

// menghapus data 
const deleteDataPembayaran = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM pembayaran where id = ?';
        connection.query(query, [id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil hapus data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal hapus data",
        });
    }
}


module.exports = {
    getDataPembayaran,
    getDataPembayaranById,
    addDataPembayaran,
    editDataPembayaran,
    deleteDataPembayaran
}