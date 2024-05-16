import {
  Controller,
  Get,
  HttpCode,
  Post,
  // Header,
  Param,
  Body,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { AddMemberDto } from './class.dto';
import { ContentService } from './content.service';
import { ClassMember } from './class.interface';

@Controller('content')
// HttpCode Get(200) by default while Post(201) by default, but can change by a @HttpCode decorator.
export class ContentController {
  constructor(private contentService: ContentService) {}


  @Get('info')
  @HttpCode(200)
  async getAllContent() {
    return this.contentService.getAllContent();
  }

  // @Post('add')
  // @HttpCode(200)
  // // TODO: about ValidationPipe, will learn later...
  // async addAClassMember(@Body() addMemberDto: AddMemberDto) {
  //   this.contentService.addClassMember(addMemberDto);
  // }

  // @Get('member/:id')
  // // you can make a param after your request
  // async getOneMember(@Param('id', ParseIntPipe) id: number) {
  //   console.log(id);
  //   return `This action returns a #${id} cat`;
  // }
}
