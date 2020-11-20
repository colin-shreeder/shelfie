module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const {url, name, price} = req.body
        console.log(req.body);
        dbInstance.create_product(url, name, price)
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
    
      getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.get_oneinventory( id )
          .then( data => res.status(200).send( data ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    },
    
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.get_inventory()
        .then( (data) => res.status(200).send(data) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
          console.log(err)
        } );
    },
    
      update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const {id} =req.params
        const {price} = req.body

    
        dbInstance.update_product([ id, price ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    },
    
      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.delete_product( id )
          .then( (inventory) => res.status(200).send(inventory) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    },
    };