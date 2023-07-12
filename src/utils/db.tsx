import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB || '', { dbName: "konkani-dictionary" });
    } catch (error) {
        throw new Error("Connection Failed!")
    }
}

export default connect