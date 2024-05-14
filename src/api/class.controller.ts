import {
  Controller,
  Get,
  HttpCode,
  Post,
  // Header,
  Param,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { AddMemberDto } from './class.dto';
import { ClassService } from './class.service';
import { ClassMember } from './class.interface';

@Controller('class')
// HttpCode Get(200) by default while Post(201) by default, but can change by a @HttpCode decorator.
export class ClassController {
  constructor(private classService: ClassService) {}

  @Get('info')
  @HttpCode(200)
  async getClassInfo() {
    return this.classService.getClassInfo();
  }

  @Post('add')
  @HttpCode(200)
  // TODO: about ValidationPipe, will learn later...
  async addAClassMember(@Body(ValidationPipe) addMemberDto: AddMemberDto) {
    this.classService.addClassMember(addMemberDto);
  }

  // @Get('member/:id')
  // // you can make a param after your request
  // async getOneMember(@Param('id') id: number) {
  //   console.log(id);
  //   return `This action returns a #${id} cat`;
  // }
}
