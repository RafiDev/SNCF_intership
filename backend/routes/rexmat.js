module.exports = function (app) {
    var multer = require('multer');
    var xlstojson = require("xls-to-json-lc");
    var xlsxtojson = require("xlsx-to-json-lc");

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var upload = multer({ storage: storage, fileFilter : function(req, file, callback) { 
        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
            return callback(new Error('Wrong extension type'));
        }
        callback(null, true);}})
        .single('file');

    app.post('/rexmat', function(req, res) {
        var exceltojson;
        upload(req,res,function(err) {
            if (err) {
                return res.json({error_code: 1, err_desc: err}); 
            }
            if (!req.file) {
                return res.json({error_code: 1, err_desc: "No file passed"});
            }

            if (req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx') {
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            } try {
                exceltojson({
                    input: req.file.path,
                    output: null, 
                    lowerCaseHeaders:true
                }, function(err, result) {
                        if (err) {
                            return res.json({error_code: 1, err_desc: err, data: null});
                        }
                        var systemeTT = 0;
                        var CompteurSET = 0;
                        var CompteurCBM = 0;
                                
                        var libelle = [];
                        var systeme = [];
                        var arrCBM = [];
                        var arrSET = [];

                        var H1 = 0;
                        var H2 = 0;
                        var H3 = 0;
                        var H4 = 0;

                        var BS = 0;
                        var CLIMATISATION = 0;
                        var COMPRESSEUR = 0;
                        var DetectionIncendie = 0;
                        var CCTV = 0;
                        var TCMS = 0;
                        var TRACTION = 0;
                        var ATESS = 0;
                        var TDB = 0;
                        var EMCO = 0;
                        var EQS = 0;
                        var PORTE = 0;
                        var FREIN = 0;
                        var ComptagePassagers = 0;
                        var AFFICHEUR = 0;
                        var LecteurBadge = 0;
                        var ECLAIRAGE = 0;
                        var PUPITRE = 0;
                        var SONO = 0;

                        for (var i = 0; i != result.length; i++) {
                            libelle.push(result[i]['libellé de l\'événement']);
                        }

                        for (var i = 0; i != libelle.length; i++) {
                            if (libelle[i].split(' - ')[0].split('_')[2].localeCompare("P400") == 0) {
                                systeme.push(libelle[i].slice(0, 18));
                            } else if (libelle[i].split(' - ')[0].split('_')[2].localeCompare("P4000") == 0) {
                                systeme.push(libelle[i].slice(0, 20));
                            } else {
                                systeme.push(libelle[i].split(' - ')[0]);
                            }
                        }

                        for (var i = 0; i != systeme.length; i++) {
                            if (systeme[i].split('_')[1].localeCompare('H1') == 0) {
                                H1++;
                            } else if (systeme[i].split('_')[1].localeCompare('H2') == 0) {
                                H2++;
                            } else if (systeme[i].split('_')[1].localeCompare('H3') == 0) {
                                H3++;
                            } if (systeme[i].split('_')[1].localeCompare('H4') == 0) {
                                H4++;
                            }
                        }
                    
                        for (var i = 0; i != systeme.length; i++) {
                            if (systeme[i].split('_')[0].localeCompare('CBM') == 0) {
                                arrCBM.push(systeme[i].slice(7));
                            } else if (systeme[i].split('_')[0].localeCompare('SET') == 0) {
                                if (systeme[i].split('_')[2].localeCompare('P400') == 0) {
                                    arrSET.push("P400");
                                } else if (systeme[i].split('_')[2].localeCompare('P4000') == 0) {
                                    arrSET.push("P4000");
                                } else {
                                    arrSET.push(systeme[i].slice(7));
                                }
                            }
                            systemeTT++;
                        }

                        for (var i = 0; i != arrCBM.length; i++) {
                            CompteurCBM++;
                        }

                        for (var i = 0; i != arrSET.length; i++) {
                            if (arrSET[i].localeCompare('BS') == 0) {
                                BS++;
                            } else if (arrSET[i].localeCompare('CLIMATISATION') == 0) {
                                CLIMATISATION++;
                            } else if (arrSET[i].localeCompare('COMPRESSEUR') == 0) {
                                COMPRESSEUR++;
                            } else if (arrSET[i].localeCompare('Detection_incendie') == 0) {
                                DetectionIncendie++;
                            } else if (arrSET[i].localeCompare('CCTV') == 0) {
                                CCTV++;
                            } else if (arrSET[i].localeCompare('TCMS') == 0) {
                                TCMS++;
                            } else if (arrSET[i].localeCompare('TRACTION') == 0) {
                                TRACTION++;
                            } else if (arrSET[i].localeCompare('ATESS') == 0) {
                                ATESS++;
                            } else if (arrSET[i].localeCompare('TDB') == 0) {
                                TDB++;
                            } else if (arrSET[i].localeCompare('EMCO') == 0) {
                                EMCO++;
                            } else if (arrSET[i].localeCompare('EQS') == 0) {
                                EQS++;
                            } else if (arrSET[i].localeCompare('PORTE') == 0) {
                                PORTE++;
                            } else if (arrSET[i].localeCompare('FREIN') == 0) {
                                FREIN++;
                            } else if (arrSET[i].localeCompare('ComptagePassagers') == 0) {
                                ComptagePassagers++;
                            } else if (arrSET[i].localeCompare('AFFICHEUR') == 0) {
                                AFFICHEUR++;
                            } else if (arrSET[i].localeCompare('LECTEUR_BADGE') == 0) {
                                LecteurBadge++;
                            } else if (arrSET[i].localeCompare('ECLAIRAGE') == 0) {
                                ECLAIRAGE++;
                            } else if (arrSET[i].localeCompare('PUPITRE') == 0) {
                                PUPITRE++;
                            } else if (arrSET[i].localeCompare('SONO') == 0) {
                                SONO++;
                            }
                            CompteurSET++;
                        }
                        
                        var dataSET = {
                            "BS": BS, "Climatisation": CLIMATISATION, 
                            "Detection Incendie": DetectionIncendie, "CCTV": CCTV, 
                            "TCMS": TCMS, "Traction": TRACTION, 
                            "ATESS": ATESS, "TDB": TDB, 
                            "EMCO": EMCO, "EQS": EQS, 
                            "Porte": PORTE, "Frein": FREIN, 
                            "Comptage Passagers": ComptagePassagers, "Afficheur": AFFICHEUR, 
                            "Lecteur Badge": LecteurBadge, "Eclairage": ECLAIRAGE, 
                            "Pupitre": PUPITRE, "Sonorisation": SONO,
                            "Compresseur": COMPRESSEUR
                        };
                        
                        var data = {
                            "Nombre de système total": systemeTT,
                            "Hiérarchie de la flotte": {
                                "H1": H1,
                                "H2": H2,
                                "H3": H3,
                                "H4": H4
                            },
                            "Type de signalement": {
                                "Nombre total de SET": CompteurSET,
                                "SET": dataSET,
                                "Nombre total de CBM": CompteurCBM,
                            }
                        };
                        return res.json({data});
                    });
                } catch (e) {
                    return res.json({error_code: 1, err_desc: "Corupted excel file"});
                }
            }
        )
    });

}