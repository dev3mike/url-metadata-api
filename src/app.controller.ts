import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MetadataService } from 'src/metadata/metadata.service';
import urlMetadata from 'url-metadata';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(
    private readonly metadata: MetadataService) { }

  @Get(':base64EncodedUrl')
  @CacheKey('getMetaData')
  @CacheTTL(3600) // 1 hour in seconds
  async getMetaData(@Param('base64EncodedUrl') base64Url: string): Promise<urlMetadata.Result> {
    const decodedUrl = Buffer.from(base64Url, 'base64').toString('utf-8');
    return this.metadata.getUrlMetadata(decodedUrl);
  }
}
