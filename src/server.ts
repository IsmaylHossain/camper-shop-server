import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
 
const port = process.env.PORT || 5000;
dotenv.config();


async function main() {
    try {
        // connect to the database
        await mongoose.connect(process?.env?.DB_URL as string);


        app.listen(port, () => {
            console.log(`app is listening on port ${port}`);
        });
    } catch (err) {

        console.log(err);
    }
}

main();