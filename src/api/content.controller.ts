import {
  Controller,
  Get,
  HttpCode,
  Post,
} from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
// HttpCode Get(200) by default while Post(201) by default, but can change by a @HttpCode decorator.
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Get('info')
  @HttpCode(200)
  async getAllContent() {
    return this.contentService.getAllContent();
  }
}
