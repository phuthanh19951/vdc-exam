import TrackModel from '../models/track';

export const trackingService = {
  create: async (payload) => {
    const newTrack = new TrackModel(payload);
    await newTrack.save();
    return newTrack;
  }
}