import fetch from 'node-fetch';
import { config } from '../config';
import { TrackingBody } from '../interfaces/track';

export class TrackingAPI {
  static track(payload: TrackingBody) {
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`${config.trackingServiceUrl}/track`, options).
      catch(err => {
        // Will use logging here to track error instead of console.log
        console.log(err);
      })
  }
}