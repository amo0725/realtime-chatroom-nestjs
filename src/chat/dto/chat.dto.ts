import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BodyCreateChatDTO {
  @IsString()
  @ApiProperty()
  from: string;

  @IsString()
  @ApiProperty()
  message: string;

  @IsString()
  @ApiProperty()
  to: string;

  @IsString()
  @ApiProperty()
  room: string;
}

export class ParamGetChatDTO {
  @IsString()
  @ApiProperty()
  room: string;
}
