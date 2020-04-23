import db from '../models/dbconnection';


class Player {
    constructor(player) {
        this.player_name = player.player_name;
        this.pdga_number = player.pdga_number;
        this.sponsor = player.sponsor;
        this.division = player.division;
        this.img_url = player.img_url
    }
}


