import { Injectable } from '@nestjs/common';
import * as urlMetadata from 'url-metadata';

@Injectable()
export class MetadataService {
    async getUrlMetadata(url: string) {
        try {
            const metadata = await urlMetadata(url, {
                requestHeaders: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                },
            });

            return metadata;
        } catch (err) {
            console.error({ url, error: err });
            return { error: 'An error occurred while fetching metadata' };
        }
    }
}
