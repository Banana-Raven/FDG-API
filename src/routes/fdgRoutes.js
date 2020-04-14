import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
            } from '../controllers/fdgController';

const routes = (app) => {
    app.route('/contact') 
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        //post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        
        //get a specific contact
        .get(getContactWithID)    
        
        //updating a specific contact
        .put(updateContact)
        
        //deleting a specific contact
        .delete(deleteContact);
}

export default routes;