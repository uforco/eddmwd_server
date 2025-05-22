import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  const config = new DocumentBuilder()
          .setTitle('Prime')
          .setDescription('Practice project')
          .setVersion('0.1')
          .build()
          
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/apis', app, document)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
