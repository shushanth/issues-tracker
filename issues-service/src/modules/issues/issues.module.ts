import { IssuesController } from './issues.controller';
import { IssuesService } from './issues.service';
import { Module, Logger } from '@nestjs/common';
import { IssuesProvider } from './issues.provider';

@Module({
  providers: [IssuesService, ...IssuesProvider, Logger],
  controllers: [IssuesController],
  exports: [IssuesService],
})
export class IssuesModule {}
