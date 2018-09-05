import { Location } from './location.model';

export interface Bucket {
  id: string;
  name: string;
  location: Location;
}

export interface Buckets {
  buckets: [Bucket];
}

export interface BucketR {
  bucket: Bucket;
}
