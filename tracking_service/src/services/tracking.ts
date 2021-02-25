import TrackModel from '../models/track';

export const trackingService = {
  getAll: async () => {
    const tracks = await TrackModel.find();
    return tracks;
  },
  create: async (payload) => {
    const newTrack = new TrackModel(payload);
    await newTrack.save();
    return newTrack;
  }
}