import { Injectable } from '@nestjs/common';
import * as urlMetadata from 'url-metadata';

@Injectable()
export class MetadataService {
    async getUrlMetadata(url: string) {
        try {
            const metadata = await urlMetadata(url);
            return metadata;
        } catch (err) {
            console.log(err);
            return { error: 'An error occurred while fetching metadata' };
        }
    }
}
