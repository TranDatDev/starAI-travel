import { ApiProperty } from '@nestjs/swagger';
export class GetCommuneDto {
  @ApiProperty()
  shortId: string;

  @ApiProperty()
  fullName: string;
}
