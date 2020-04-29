import db from '../models/dbconnection';
import Player from '../models/playerModel';

export const getAllPlayers = (req, res) => {
    let pathname = req._parsedUrl.pathname.split('/');
    let section = pathname[1];
    //console.log('Section of URL: ' + section)

    var results = db.query('SELECT * FROM ??', [section], (err, results, fields) => {
        if (err) {
            console.log(error);
            var apiResult = {};
                
            apiResult.meta = {
                table: section,
                type: "collection",
                total: 0
            }

            apiResult.data = [];
            
            res.json(apiResult);
        }
        //make results 
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);
        var apiResult = {};

        apiResult.meta = {
            table: section,
            type: "collection",
            total: 1,
            total_entries: 0
        }
        
        apiResult.data = resultJson;
        
        res.json(apiResult);
    });
}

    //adding a player
    //body: player_name, pdga_number, sponsor, division, img_url
export const addNewPlayer = (req, res) => {
        //commenting out the working version of addnewplayer for testing the new model
        /*var results = db.query('INSERT INTO player SET player_name = ?, pdga_number=?, sponsor=?, division=?, img_url=?', [req.body.player_name, req.body.pdga_number, req.body.sponsor, req.body.division, req.body.img_url], (err, results) => {
            if (!req.body) {
                res.status(400).send({
                    message: "Content can not be empty"
                });
            }
            if (err) {
                console.log(error);
                var apiResult = {};
                    //https://www.restapiexample.com/build-rest-api/create-rest-api-using-node-js-mysql-express/
                    //https://bezkoder.com/node-js-rest-api-express-mysql/
                res.status(500).send({
                    message: 
                        err.message || "Some error occured while creating the Customer."
                });
            }

            //TO-DO
            //Change this to return the player that was created.
            res.send(results);

        });*/ //This is the end of the working addnewplayer
        

        // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

        //TO-DO
        //add validations that the proper data is all there

        //Create the player
    const player = new Player({
        player_name: req.body.player_name,
        pdga_number: req.body.pdga_number,
        sponsor: req.body.sponsor,
        division: req.body.division,
        img_url: req.body.img_url
    });

    Player.create(player, (err, data) => {
        if (err)
            res.states(500).send({
                message:
                    err.message || "Some error occured while creating the Customer."
            });
        else res.send(data);
    });




    /*newContact.save((err, contact) => {
        if(err) {  
            res.send(err);
        }
        res.json(contact);*/
}

//must have the param:
//playerId
export const getPlayerById = (req, res) => {
    Player.findById(req.params.playerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `not found Player with id ${req.params.playerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Player with id " + req.params.playerId
                });
            }
        } else res.send(data);
    });
}

export const getPlayerByPDGANum = (req, res) => {
    Player.findByPDGANum(req.params.pdga_number, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `not found Player with PDGA number ${req.params.pdga_number}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Player with PDGA number " + req.params.pdga_number
                });
            }
        } else res.send(data);
    });
}
