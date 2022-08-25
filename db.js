import mongoose from "mongoose";

const conn = () => {
    mongoose.connect("mongodb+srv://root:k!2uSoe698ei@cluster0.rbbsv26.mongodb.net/?retryWrites=true&w=majority", {
        dbName: "uniclubs-test",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected to the database successfully");
    }).catch((err) => {
        console.log("database error: " + err);
    })
}

export default conn;