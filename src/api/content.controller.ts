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

  // 这个接口返回了全部的关卡、文章的标题，简介，内容，一般不调用。仅做测试
  @Get('info')
  @HttpCode(200)
  async getAllContent() {
    return this.contentService.getAllContent();
  }

  // 返回所有关卡，章节目录。不包括文章具体内容
  @Get('menu')
  @HttpCode(200)
  async getContentMenu() {
    return this.contentService.getContentMenu();
  }


}
