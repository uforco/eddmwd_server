import { ApiProperty } from "@nestjs/swagger"

export class CreateContactusDto {
    @ApiProperty({ example: "jon" })
    firstName: string

    @ApiProperty({ example: "Deo" })
    lastName: string

    @ApiProperty({ example: "example@gmail.com" })
    email: string

    @ApiProperty({ example: "+880 1923-34675" })
    phone: string

    @ApiProperty({ example: "your message" })
    messges: string
}
