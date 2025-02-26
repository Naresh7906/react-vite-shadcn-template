// Mock API URL for tests
import dotenv from "dotenv"

dotenv.config()

export const TEST_API_URL = process.env.VITE_API_URL || 'http://localhost:3000';

// Mock your env file

export const testEndpoints = {
    login: `${TEST_API_URL}/auth/login`,
};