import db from '../models/dbconnection';


export default class Player {
    constructor(player) {
        this.player_name = player.player_name;
        this.pdga_number = player.pdga_number;
        this.sponsor = player.sponsor;
        this.division = player.division;
        this.img_url = player.img_url
    }
};

Player.create = (newPlayer, result) => {
    db.query("INSERT INTO player SET ?", newPlayer, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created Player: ", { id: res.insertID, ...newPlayer });
        result(null, { id: res.insertId, ...newPlayer });
    });
};

Player.findById = (playerId, result) => {
    db.query(`SELECT * FROM player WHERE player_id = ${playerId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Found Player: ", res[0]);
            result(null, res[0]);
            return;
        }

        //not found player with the id
        result({ kind: "not_found" }, null);
    });
};

Player.findByPDGANum = (pdga_number, result) => {
    db.query(`SELECT * FROM player WHERE pdga_number = ${pdga_number}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Found Player: ", res[0]);
            result(null, res[0]);
            return;
        }

        //not found player with the id
        result({ kind: "not_found" }, null);
    });
};
