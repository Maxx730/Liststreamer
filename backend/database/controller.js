var LOGGING = true;
var SQL_CONNECTED = false;

var security = require('../security/util.js');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'liststreamer',
    password: 'dRmario43'
});

module.exports = {
    Connect : function() {
        return new Promise((resolve,reject) => {
            if(LOGGING) {
                console.log("ATTEMPTING TO CONNECT TO MYSQL");
            }

            conn.connect((err) => {
                if(err) {
                    reject(err);
                } else {
                    this.CreateDatabase('liststreamer').then((result) => {
                        if(result){
                            if(LOGGING) {
                                console.log("DATABASE CREATION SUCCESSFULL");
                                resolve(result);
                            }
                        } else {
                            reject(result);
                        }
                    });
                }
            });
        });
    },
    CreateDatabase : function(name) {
        return new Promise((resolve,reject) => {
            if(LOGGING) {
                console.log("ATTEMPTING TO CREATE DATABASE");
            }
            conn.query('CREATE DATABASE IF NOT EXISTS ' + name,(err,result) => {
                if(err) {
                    reject(err);
                } else {
                    //Now that we have the database we are going to want to use the database and
                    //create all of the necessary tables.
                    conn.query('USE liststreamer',(err,result) => {
                        if(err) {
                            reject(err);
                        } else {
                            conn.query('CREATE TABLE IF NOT EXISTS streams(_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,title VARCHAR(255) NOT NULL,access_code VARCHAR (8) NOT NULL,open BOOLEAN NOT NULL DEFAULT 0,creator INT NOT NULL)',(err,result) => {
                                if(err) {
                                    reject(err);
                                } else {
                                    conn.query('CREATE TABLE IF NOT EXISTS streamers(_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255) NOT NULL,stream_id INT NOT NULL,active BOOLEAN NOT NULL DEFAULT true)',(err,result) => {
                                        if(err) {
                                            reject(err);
                                        } else {
        
                                            conn.query('CREATE TABLE IF NOT EXISTS entries(_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,youtube_id VARCHAR(255) NOT NULL,stream_id INT NOT NULL,streamer_id INT NOT NULL)',(err,result) => {
                                                if(err) {
                                                    reject(err);
                                                } else {
                                                    resolve(true);
                                                }
                                            })
                                        }
                                    })
                                }
                            });
                        }
                    });
                }
            });
            
        });
    },
    CheckKey: function(key) {
        return new Promise((resolve,reject) => {
            if(LOGGING) {
                console.log("CHECKING NEW STREAM KEY AGAINST DATABASE");
            }
    
            conn.query('SELECT * FROM streams WHERE access_code = "' + key + '"',(err,result) => {
                if(err) {
                    reject(err);
                } else {
                    if(result.length === 0){
                        resolve({
                            pass:true,
                            value: key
                        });
                    }
        
                    resolve({
                        pass: false,
                        value: key
                    });
                }
            });
        });
    },
    CreateStream: function(name,key,creator) {
        if(LOGGING) {
            console.log("ATTEMPTING TO CREATE A NEW LISTSTREAM");
        }

        return new Promise((resolve,reject) => {
            if(name !== '' && name !== undefined && creator !== undefined){
                try {
                    this.CheckKey(key).then((result) => {
                        if(result.pass){
                            if(LOGGING){
                                console.log("KEY PASSED CREATING NEW STREAM");
                            }

                            conn.query('INSERT INTO streams(title,access_code,creator,open) VALUES("' + name + '","' + key + '",' + creator + ',true)',(err,result) => {
                                if(err) {
                                    reject(err);
                                } else {
                                    resolve({
                                        status: 'SUCCESS'
                                    });
                                }
                            });
                        } else {
                            this.CreateStream(name,security.GenerateAccessCode(),creator);
                            reject(false)
                        }
                    });
                } catch (err) {
                    reject(err);
                }
            } else {
                reject("MISSING INFORMATION TO CREATE STREAM");
            }
        });
    },
    CreateStreamer: function(name) {
        return new Promise((resolve,reject) => {
            if(LOGGING) {
                console.log("ATTEMPTING TO CREATE NEW STREAMER");
            }

        });
    }
};