require('dotenv').config() //instatiate environment variables

CONFIG = {} //Make this global to use all over the application

CONFIG.app = process.env.APP || 'dev'
CONFIG.port = process.env.PORT || '3000'

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'jwt_secret_key'
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || 60 * 60 * 24 //Eg: 60, "2 days", "10h", "7d"

// mongodb
CONFIG.mongodb_url = process.env.MONGODB_URL || 'mongodb://localhost:27017/thesis'
