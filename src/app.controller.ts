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

  @Get(':url')
  @CacheTTL(3600) // 1 hour in seconds
  async getMetaData(@Param('url') url: string): Promise<urlMetadata.Result> {
    return this.metadata.getUrlMetadata(url);
  }
}
