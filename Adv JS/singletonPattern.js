const DB_CONNECTION= (function()
{
let connectionPoint=null;

function establishDbConnection()
{
 
    const CONNECT_DB = new Object("{Port:'3000', }");
    return CONNECT_DB;
}
  return {
    getConnectionDetails : function()
    {
      if(connectionPoint==null) {

        connectionPoint = establishDbConnection();
        }

        return connectionPoint; 
    }
  }
}

)();

const portLog = DB_CONNECTION.getConnectionDetails();
console.log(portLog);
const portLog2 = DB_CONNECTION.getConnectionDetails();
console.log(portLog2);
console.log(portLog===portLog2);