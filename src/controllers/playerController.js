import db from '../models/dbconnection';

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
        var results = db.query('INSERT INTO player SET player_name = ?, pdga_number=?, sponsor=?, division=?, img_url=?', [req.body.player_name, req.body.pdga_number, req.body.sponsor, req.body.division, req.body.img_url], (err, results) => {
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

        });

    /*newContact.save((err, contact) => {
        if(err) {  
            res.send(err);
        }
        res.json(contact);*/
    }
