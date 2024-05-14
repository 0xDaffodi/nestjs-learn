import {
  Controller,
  Get,
  HttpCode,
  Post,
  Header,
  Param,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { AddMemberDto } from './class.dto';

@Controller('class')
// HttpCode Get(200) by default while Post(201) by default, but can change by a @HttpCode decorator.
export class ClassController {
  @Get('info')
  @HttpCode(200)
  async getClassInfo() {
    return { class: 'This class has no students and teachers.' };
  }

  @Post('add')
  // you can customize your own header by @Header decorator.
  @Header('customizeHeader', 'my-own-key')
  @HttpCode(200)
  async addAClassMember(@Body(ValidationPipe) addMemberDto: AddMemberDto) {
    console.log(addMemberDto);
    return 'This action adds a new cat';
  }

  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }

  @Get('member/:id')
  // you can make a param after your request
  async getOneMember(@Param('id') id: number) {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
