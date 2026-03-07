import validator from 'validator'
import bcrypt, { genSaltSync } from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !password || !email) {
            return res.status(400).json({ success: false, message: "Missing Details" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "enter a valid email" })
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already registered" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "enter a strong password" })
        }

        const hashedPassword = bcrypt.hashSync(password, genSaltSync(10))
        const userData = { name, email, password: hashedPassword }
        const newUser = new userModel(userData)
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" })
        return res.status(201).json({ success: true, token })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Missing email or password' })
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ success: false, message: 'User does not exist' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid password' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        return res.status(200).json({ success: true, token })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, message: error.message })
    }
}


const getProfile = async (req, res) => {
    try {
        const { userId } = req.body

        if (!userId) {
            return res.status(400).json({ success: false, message: 'Missing userId' })
        }

        const userData = await userModel.findById(userId).select('-password')

        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        // console.log("hi")
        return res.status(200).json({ success: true, userData })

    } catch (error) {
        // console.error(error)
        return res.status(500).json({ success: false, message: error.message })
    }
}

//api to update userprofile
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body
        const imageFile = req.file

        if (!userId || !name || !phone || !dob || !gender) {
            return res.status(400).json({ success: false, message: "Data Missing" })
        }

        let updateData = { name, phone, dob, gender }

        if (address) {
            try {
                updateData.address = JSON.parse(address)
            } catch (err) {
                return res.status(400).json({ success: false, message: "Invalid address format" })
            }
        }

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
            updateData.image = imageUpload.secure_url
        }

        const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true })

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" })
        }

        return res.status(200).json({ success: true, message: "Profile updated successfully"})

    } catch (error) {
        // console.error(error)
        return res.status(500).json({ success: false, message: error.message })
    }
}

export { registerUser, loginUser, getProfile,updateProfile }