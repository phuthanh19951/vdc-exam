import dotenv from 'dotenv';
dotenv.config();

export const config = {
  trackingServiceUrl: process.env.TRACKING_SERVICE_URL
}