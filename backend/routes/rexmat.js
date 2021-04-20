module.exports = (app) => {
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

                        var rames = [];
                        var libelle = [];
                        var systeme = [];
                        var rameLibelle = [];

                        var arrCBM = [];
                        var arrSET = [];

                        var systemeH1 = [];
                        var systemeH2 = [];
                        var systemeH3 = [];
                        var systemeH4 = [];


                        var H1 = 0;
                        var H2 = 0;
                        var H3 = 0;
                        var H4 = 0;

                        var systemeTT = 0;
                        var CompteurSET = 0;
                        var CompteurCBM = 0;

                        var SET_H1 = 0;
                        var SET_H2 = 0;
                        var SET_H3 = 0;
                        var SET_H4 = 0;


                        var CBM_H1 = 0;
                        var CBM_H2 = 0;
                        var CBM_H3 = 0;
                        var CBM_H4 = 0;

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

                        var BS_H1 = 0;
                        var CLIMATISATION_H1 = 0;
                        var COMPRESSEUR_H1 = 0;
                        var DetectionIncendie_H1 = 0;
                        var CCTV_H1 = 0;
                        var TCMS_H1 = 0;
                        var TRACTION_H1 = 0;
                        var ATESS_H1 = 0;
                        var TDB_H1 = 0;
                        var EMCO_H1 = 0;
                        var EQS_H1 = 0;
                        var PORTE_H1 = 0;
                        var FREIN_H1 = 0;
                        var ComptagePassagers_H1 = 0;
                        var AFFICHEUR_H1 = 0;
                        var LecteurBadge_H1 = 0;
                        var ECLAIRAGE_H1 = 0;
                        var PUPITRE_H1 = 0;
                        var SONO_H1 = 0;

                        var BS_H2 = 0;
                        var CLIMATISATION_H2 = 0;
                        var COMPRESSEUR_H2 = 0;
                        var DetectionIncendie_H2 = 0;
                        var CCTV_H2 = 0;
                        var TCMS_H2 = 0;
                        var TRACTION_H2 = 0;
                        var ATESS_H2 = 0;
                        var TDB_H2 = 0;
                        var EMCO_H2 = 0;
                        var EQS_H2 = 0;
                        var PORTE_H2 = 0;
                        var FREIN_H2 = 0;
                        var ComptagePassagers_H2 = 0;
                        var AFFICHEUR_H2 = 0;
                        var LecteurBadge_H2 = 0;
                        var ECLAIRAGE_H2 = 0;
                        var PUPITRE_H2 = 0;
                        var SONO_H2 = 0;

                        var BS_H3 = 0;
                        var CLIMATISATION_H3 = 0;
                        var COMPRESSEUR_H3 = 0;
                        var DetectionIncendie_H3 = 0;
                        var CCTV_H3 = 0;
                        var TCMS_H3 = 0;
                        var TRACTION_H3 = 0;
                        var ATESS_H3 = 0;
                        var TDB_H3 = 0;
                        var EMCO_H3 = 0;
                        var EQS_H3 = 0;
                        var PORTE_H3 = 0;
                        var FREIN_H3 = 0;
                        var ComptagePassagers_H3 = 0;
                        var AFFICHEUR_H3 = 0;
                        var LecteurBadge_H3 = 0;
                        var ECLAIRAGE_H3 = 0;
                        var PUPITRE_H3 = 0;
                        var SONO_H3 = 0;

                        var BS_H4 = 0;
                        var CLIMATISATION_H4 = 0;
                        var COMPRESSEUR_H4 = 0;
                        var DetectionIncendie_H4 = 0;
                        var CCTV_H4 = 0;
                        var TCMS_H4 = 0;
                        var TRACTION_H4 = 0;
                        var ATESS_H4 = 0;
                        var TDB_H4 = 0;
                        var EMCO_H4 = 0;
                        var EQS_H4 = 0;
                        var PORTE_H4 = 0;
                        var FREIN_H4 = 0;
                        var ComptagePassagers_H4 = 0;
                        var AFFICHEUR_H4 = 0;
                        var LecteurBadge_H4 = 0;
                        var ECLAIRAGE_H4 = 0;
                        var PUPITRE_H4 = 0;
                        var SONO_H4 = 0;

                        for (var i = 0; i != result.length; i++) {
                            libelle.push(result[i]['libellé de l\'événement']);
                            rames.push(result[i]['engin impactée']);
                            rameLibelle.push(rames[i] + ' ' + libelle[i]);
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
                                systemeH1.push(systeme[i]);
                                H1++;
                            } else if (systeme[i].split('_')[1].localeCompare('H2') == 0) {
                                systemeH2.push(systeme[i]);
                                H2++;
                            } else if (systeme[i].split('_')[1].localeCompare('H3') == 0) {
                                systemeH3.push(systeme[i]);
                                H3++;
                            } if (systeme[i].split('_')[1].localeCompare('H4') == 0) {
                                systemeH4.push(systeme[i]);
                                H4++;
                            }
                        }

                        for (var i = 0; i != systemeH1.length; i++) {
                            if (systemeH1[i].split('_')[0].localeCompare('SET') == 0) {
                                if (systemeH1[i].split('_')[2].localeCompare('BS') == 0) {
                                    BS_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('CLIMATISATION') == 0) {
                                    CLIMATISATION_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('COMPRESSEUR') == 0) {
                                    COMPRESSEUR_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('Detection') == 0 && systemeH1[i].split('_')[3].localeCompare('incendie') == 0) {
                                    DetectionIncendie_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('CCTV') == 0) {
                                    CCTV_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('TCMS') == 0) {
                                    TCMS_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('TRACTION') == 0) {
                                    TRACTION_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('ATESS') == 0) {
                                    ATESS_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('TDB') == 0) {
                                    TDB_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('EMCO') == 0) {
                                    EMCO_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('EQS') == 0) {
                                    EQS_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('PORTE') == 0) {
                                    PORTE_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('FREIN') == 0) {
                                    FREIN_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('ComptagePassagers') == 0) {
                                    ComptagePassagers_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('AFFICHEUR') == 0) {
                                    AFFICHEUR_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('LECTEUR') == 0 && systemeH1[i].split('_')[3].localeCompare('BADGE') == 0) {
                                    LecteurBadge_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('ECLAIRAGE') == 0) {
                                    ECLAIRAGE_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('PUPITRE') == 0) {
                                    PUPITRE_H1++;
                                } else if (systemeH1[i].split('_')[2].localeCompare('SONO') == 0) {
                                    SONO_H1++;
                                }
                                SET_H1++;
                            } else {
                                CBM_H1++;
                            }
                        }

                        for (var i = 0; i != systemeH2.length; i++) {
                            if (systemeH2[i].split('_')[0].localeCompare('SET') == 0) { 
                                if (systemeH2[i].split('_')[2].localeCompare('BS') == 0) {
                                    BS_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('CLIMATISATION') == 0) {
                                    CLIMATISATION_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('COMPRESSEUR') == 0) {
                                    COMPRESSEUR_H1++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('Detection') == 0 && systemeH2[i].split('_')[3].localeCompare('incendie') == 0) {
                                    DetectionIncendie_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('CCTV') == 0) {
                                    CCTV_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('TCMS') == 0) {
                                    TCMS_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('TRACTION') == 0) {
                                    TRACTION_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('ATESS') == 0) {
                                    ATESS_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('TDB') == 0) {
                                    TDB_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('EMCO') == 0) {
                                    EMCO_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('EQS') == 0) {
                                    EQS_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('PORTE') == 0) {
                                    PORTE_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('FREIN') == 0) {
                                    FREIN_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('ComptagePassagers') == 0) {
                                    ComptagePassagers_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('AFFICHEUR') == 0) {
                                    AFFICHEUR_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('LECTEUR') == 0 && systemeH2[i].split('_')[3].localeCompare('BADGE') == 0) {
                                    LecteurBadge_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('ECLAIRAGE') == 0) {
                                    ECLAIRAGE_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('PUPITRE') == 0) {
                                    PUPITRE_H2++;
                                } else if (systemeH2[i].split('_')[2].localeCompare('SONO') == 0) {
                                    SONO_H2++;
                                }
                                SET_H2++;
                            } else {
                                CBM_H2++;
                            }
                        }

                        for (var i = 0; i != systemeH3.length; i++) {
                            if (systemeH3[i].split('_')[0].localeCompare('SET') == 0) {
                                if (systemeH3[i].split('_')[2].localeCompare('BS') == 0) {
                                    BS_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('CLIMATISATION') == 0) {
                                    CLIMATISATION_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('COMPRESSEUR') == 0) {
                                    COMPRESSEUR_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('Detection') == 0 && systemeH3[i].split('_')[3].localeCompare('incendie') == 0) {
                                    DetectionIncendie_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('CCTV') == 0) {
                                    CCTV_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('TCMS') == 0) {
                                    TCMS_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('TRACTION') == 0) {
                                    TRACTION_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('ATESS') == 0) {
                                    ATESS_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('TDB') == 0) {
                                    TDB_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('EMCO') == 0) {
                                    EMCO_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('EQS') == 0) {
                                    EQS_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('PORTE') == 0) {
                                    PORTE_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('FREIN') == 0) {
                                    FREIN_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('ComptagePassagers') == 0) {
                                    ComptagePassagers_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('AFFICHEUR') == 0) {
                                    AFFICHEUR_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('LECTEUR') == 0 && systemeH3[i].split('_')[3].localeCompare('BADGE') == 0) {
                                    LecteurBadge_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('ECLAIRAGE') == 0) {
                                    ECLAIRAGE_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('PUPITRE') == 0) {
                                    PUPITRE_H3++;
                                } else if (systemeH3[i].split('_')[2].localeCompare('SONO') == 0) {
                                    SONO_H3++;
                                }
                                SET_H3++;
                            } else {
                                CBM_H3++;
                            }
                        }

                        for (var i = 0; i != systemeH4.length; i++) {
                            if (systemeH4[i].split('_')[0].localeCompare('SET') == 0) {
                                if (systemeH4[i].split('_')[2].localeCompare('BS') == 0) {
                                    BS_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('CLIMATISATION') == 0) {
                                    CLIMATISATION_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('COMPRESSEUR') == 0) {
                                    COMPRESSEUR_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('Detection') == 0 && systemeH4[i].split('_')[3].localeCompare('incendie') == 0) {
                                    DetectionIncendie_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('CCTV') == 0) {
                                    CCTV_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('TCMS') == 0) {
                                    TCMS_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('TRACTION') == 0) {
                                    TRACTION_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('ATESS') == 0) {
                                    ATESS_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('TDB') == 0) {
                                    TDB_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('EMCO') == 0) {
                                    EMCO_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('EQS') == 0) {
                                    EQS_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('PORTE') == 0) {
                                    PORTE_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('FREIN') == 0) {
                                    FREIN_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('ComptagePassagers') == 0) {
                                    ComptagePassagers_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('AFFICHEUR') == 0) {
                                    AFFICHEUR_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('LECTEUR') == 0 && systemeH4[i].split('_')[3].localeCompare('BADGE') == 0) {
                                    LecteurBadge_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('ECLAIRAGE') == 0) {
                                    ECLAIRAGE_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('PUPITRE') == 0) {
                                    PUPITRE_H4++;
                                } else if (systemeH4[i].split('_')[2].localeCompare('SONO') == 0) {
                                    SONO_H4++;
                                }
                                SET_H4++;
                            } else {
                                CBM_H4++;
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

                        var data_H1 = {
                            "BS": BS_H1, "Climatisation": CLIMATISATION_H1, 
                            "Detection Incendie": DetectionIncendie_H1, "CCTV": CCTV_H1, 
                            "TCMS": TCMS_H1, "Traction": TRACTION_H1, 
                            "ATESS": ATESS_H1, "TDB": TDB_H1, 
                            "EMCO": EMCO_H1, "EQS": EQS_H1, 
                            "Porte": PORTE_H1, "Frein": FREIN_H1, 
                            "Comptage Passagers": ComptagePassagers_H1, "Afficheur": AFFICHEUR_H1, 
                            "Lecteur Badge": LecteurBadge_H1, "Eclairage": ECLAIRAGE_H1, 
                            "Pupitre": PUPITRE_H1, "Sonorisation": SONO_H1,
                            "Compresseur": COMPRESSEUR_H1,
                            "Nombre de SET en H1": SET_H1, "Nombre de CBM en H1": CBM_H1
                        };

                        var data_H2 = {
                            "BS": BS_H2, "Climatisation": CLIMATISATION_H2, 
                            "Detection Incendie": DetectionIncendie_H2, "CCTV": CCTV_H2, 
                            "TCMS": TCMS_H2, "Traction": TRACTION_H2, 
                            "ATESS": ATESS_H2, "TDB": TDB_H2, 
                            "EMCO": EMCO_H2, "EQS": EQS_H2, 
                            "Porte": PORTE_H2, "Frein": FREIN_H2, 
                            "Comptage Passagers": ComptagePassagers_H2, "Afficheur": AFFICHEUR_H2, 
                            "Lecteur Badge": LecteurBadge_H2, "Eclairage": ECLAIRAGE_H2, 
                            "Pupitre": PUPITRE_H2, "Sonorisation": SONO_H2,
                            "Compresseur": COMPRESSEUR_H2,
                            "Nombre de SET en H2": SET_H2, "Nombre de CBM en H2": CBM_H2
                        };

                        var data_H3 = {
                            "BS": BS_H3, "Climatisation": CLIMATISATION_H3, 
                            "Detection Incendie": DetectionIncendie_H3, "CCTV": CCTV_H3, 
                            "TCMS": TCMS_H3, "Traction": TRACTION_H3, 
                            "ATESS": ATESS_H3, "TDB": TDB_H3, 
                            "EMCO": EMCO_H3, "EQS": EQS_H3, 
                            "Porte": PORTE_H3, "Frein": FREIN_H3, 
                            "Comptage Passagers": ComptagePassagers_H3, "Afficheur": AFFICHEUR_H3, 
                            "Lecteur Badge": LecteurBadge_H3, "Eclairage": ECLAIRAGE_H3, 
                            "Pupitre": PUPITRE_H3, "Sonorisation": SONO_H3,
                            "Compresseur": COMPRESSEUR_H3,
                            "Nombre de SET en H3": SET_H3, "Nombre de CBM en H3": CBM_H3
                        };

                        var data_H4 = {
                            "BS": BS_H4, "Climatisation": CLIMATISATION_H4, 
                            "Detection Incendie": DetectionIncendie_H4, "CCTV": CCTV_H4, 
                            "TCMS": TCMS_H4, "Traction": TRACTION_H4, 
                            "ATESS": ATESS_H4, "TDB": TDB_H4, 
                            "EMCO": EMCO_H4, "EQS": EQS_H4, 
                            "Porte": PORTE_H4, "Frein": FREIN_H4, 
                            "Comptage Passagers": ComptagePassagers_H4, "Afficheur": AFFICHEUR_H4, 
                            "Lecteur Badge": LecteurBadge_H4, "Eclairage": ECLAIRAGE_H4, 
                            "Pupitre": PUPITRE_H4, "Sonorisation": SONO_H4,
                            "Compresseur": COMPRESSEUR_H4,
                            "Nombre de SET en H4": SET_H4, "Nombre de CBM en H4": CBM_H4
                        };
                        
                        var data = {
                            "Nombre de système total": systemeTT,
                            "Hiérarchie de la flotte": {
                                "H1": H1,
                                "H2": H2,
                                "H3": H3,
                                "H4": H4
                            },
                            "Nombre de signalement par hiérarchie": {
                                "systeme en H1": data_H1,
                                "systeme en H2": data_H2,
                                "systeme en H3": data_H3,
                                "systeme en H4": data_H4
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