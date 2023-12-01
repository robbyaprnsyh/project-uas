const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataSupplier = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM supplier", function (error, rows) {
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
const getDataSupplierById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM supplier WHERE id = ?";
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
const addDataSupplier = async (req, res) => {
    let data = {
        id: req.body.id,
        nama_supplier: req.body.nama_supplier,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO supplier SET ?';
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
const editDataSupplier = async (req, res) => {
    let id = req.params.id;
    let data = {
        id: req.body.id,
        nama_supplier: req.body.nama_supplier,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE supplier SET ? where id = ?';
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
const deleteDataSupplier = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM supplier where id = ?';
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
    getDataSupplier,
    getDataSupplierById,
    addDataSupplier,
    editDataSupplier,
    deleteDataSupplier
}