import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreatePropertyDto })
  create(@Body() createPropertyDto: CreatePropertyDto, @UploadedFile() file: Express.Multer.File) {
    
    const data = {...createPropertyDto, image: file};
    return this.propertiesService.create(data);
  }

  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }
// @Query() query: { propertiestype: string, area: string }
  @Get('quarry')
  findQuarry(
    @Query('propertiestype') propertiestype: string,
    @Query('area') area: string
  ){
    // console.log('query', propertiestype, area)
    return this.propertiesService.findquery({propertiestype, area})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(+id);
    // return id;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(+id);
  }
}
