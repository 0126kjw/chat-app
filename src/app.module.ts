import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'), // <-- path to the static files
    }),
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
