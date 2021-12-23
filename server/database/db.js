import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@app-shard-00-00.dey26.mongodb.net:27017,app-shard-00-01.dey26.mongodb.net:27017,app-shard-00-02.dey26.mongodb.net:27017/APP?ssl=true&replicaSet=atlas-l84pfv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
       console.log("Data base connected");
    } catch(error) {
        console.log("Error mongo", error);
    }
    
}

export default Connection;