const { Client } = require('pg');

const connectDB =() => {
    try {
        const client = new Client({
            connectionString: "postgres://jlouomhuksbxsb:7b4e2aef43a6df5f981e478afed4c8fb5eed4a287c94b14986cccbb49eb214a9@ec2-34-194-73-236.compute-1.amazonaws.com:5432/dd9pd5qjll0k1q",
            ssl: {
              rejectUnauthorized: false
            }
          });
        client.connect();
      
      //   client.query({
      //     name: 'insert',
      //     text: "INSERT INTO company(name, description, department, package, website, email, phoneno, approval) values($1, $2, $3, $4, $5, $6, $7, $8)",
      //     values: ['Nextcompany', 'This priys', 'Data analytics', '45000', 'www.pan4bbnbnn1y.com', 'niu4uuy@gmail.com', '1001925', true]
      // });
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB




