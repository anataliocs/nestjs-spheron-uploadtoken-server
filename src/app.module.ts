import {Module} from '@nestjs/common';
import {UploadTokenModule} from './opensea/uploadTokenModule';
import {ConfigModule, ConfigService} from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UploadTokenModule,
    ],
})

export class AppModule {
}
