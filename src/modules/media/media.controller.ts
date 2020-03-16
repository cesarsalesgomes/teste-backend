import { Controller, Post, Body } from '@nestjs/common';
import { Media } from './media.entitity';
import { MediaService } from './media.service';
import { MediaDTO } from './media.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) { }

  @Post('/')
  public createMedia(@Body() media: MediaDTO): Media {
    return this.mediaService.createMedia(media);
  }
}
