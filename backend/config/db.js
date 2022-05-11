const { Client } = require('pg');


    try {
        const client = new Client({
            connectionString: "postgres://jlouomhuksbxsb:7b4e2aef43a6df5f981e478afed4c8fb5eed4a287c94b14986cccbb49eb214a9@ec2-34-194-73-236.compute-1.amazonaws.com:5432/dd9pd5qjll0k1q",
            ssl: {
              rejectUnauthorized: false
            }
          });
        client.connect();
        module.exports = client
      
    } catch (error) {
        console.error(error)
        process.exit(1)
    }







