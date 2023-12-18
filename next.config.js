/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        LINKEDIN_API_KEY: process.env.LINKEDIN_API_KEY,
        LINKEDIN_SECRET_KEY: process.env.LINKEDIN_SECRET_KEY,
        LINKEDIN_CALLBACK_URL: process.env.LINKEDIN_CALLBACK_URL,
        // MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
        // DEFAULT_LOGO: process.env.DEFAULT_LOGO
    }
}

module.exports = nextConfig
