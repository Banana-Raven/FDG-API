//import { addNewContact,
//   getContacts,
//    getContactWithID,
 //   updateContact,
//    deleteContact
 //       } from '../controllers/fdgController';

import { 
        getAllPlayers,
        addNewPlayer,
        getPlayerById,
        getPlayerByPDGANum
        } from '../controllers/playerController';

 const routes = (app) => {
    //GET /player -> Returns all players
    app.route('/player') 
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getAllPlayers)
    
        //POST /player -> Adds a new player. info in the body

        //post endpoint
        .post(addNewPlayer);

   app.route('/player/:playerId')
        

    //GET /playerByID/:playerID -> Returns a player by ID

    //GET /playerByPDGANum/:pdgaNum ->Returns player by pdga num

    //GET /playerByDivision/:division -> Returns all players in a division

    //PUT /player/:pdgaNum -> Updates player by pdga number. info in the body

    //DELETE /player/:pdgaNum -> Deletes player by pdga number


        //get a specific contact
        .get(getPlayerById);    
        
        //updating a specific contact
        //.put(updateContact)
        
        //deleting a specific contact
        //.delete(deleteContact);


    app.route('/player/pdga/:pdga_number')
        .get(getPlayerByPDGANum);



}

export default routes;