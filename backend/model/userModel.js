import mongoose from "mongoose";
import { hashPassword, comparePassword } from '../hooks/passwordHooks.js';

//Base User Schema

const userSchema = new mongoose.Schema({
    name: { type: String },
    role: {
        type:String,
        enum: ["Student", "Admin", "Emplyoee"],
        required: true,
    },
    isActivated:{type:Boolean, default:false},

});

// Student Schema

const StudentSchema = new mongoose.Schema({
    ...userSchema.obj,    // use spread operator to acess the fileds of user schema(it spread all the fileds of user schema)
    phone:{type:Number, required:true, unique:true},
    role:{type:String, enum: ["Student"], default:"Student"},
    email:{type:String, required:true, unique:true},
    address: {type:String},
});


//  EmployeeSchema  

const EmployeeSchema = new mongoose.Schema({
    ...userSchema.obj,    // use spread operator to acess the fileds of user schema(it spread all the fileds of user schema)
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true },
    phone:{type:Number, required:true },
    role:{type:String, enum: ["Employee"], default:"Employee"},
    liveLocation: {       // get the live location of user when user is loged in
        latitude:{ type:Number},
        longitude:{type:Number},
    },
    address: {type:String},
    branch:{    // create branch (Brach and delivery partner will be linked(for in same area))
        type:mongoose.Schema.Types.ObjectId,
    ref: "Branch",  
    },
});

EmployeeSchema.pre('save', hashPassword);
EmployeeSchema.methods.comparePassword = comparePassword;

// Admin Schema

const adminSchema = new mongoose.Schema({
    ...userSchema.obj,    // use spread operator to acess the fileds of user schema(it spread all the fileds of user schema)
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true },
    phone:{type:Number, required:true },
    role:{type:String, enum: ["Admin"], default:"Admin"},
});


// Export all the Scehma's

export const Student = mongoose.model("Student", StudentSchema);
export const Employee = mongoose.model("Employee", EmployeeSchema);
export const Admin = mongoose.model("admin", adminSchema);