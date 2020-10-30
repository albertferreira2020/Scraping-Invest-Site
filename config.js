module.exports = {
 
        config : {
 
        server: "localhost",
        user: "sa",
        password: "sa",
    
        connectionTimeout: 300000,
        requestTimeout: 300000,
        pool: {
            idleTimeoutMillis: 300000,
            max: 100
        },
    
        options: {
            port: 1433, 
            database: 'Portfolium',
            //instancename: 'SQLEXPRESS'
          }
    }
              

}
