import { ArgsType, Field} from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

@ArgsType()
export class createVideosDto {
    @Field(type => String)
    @IsString()
    @Length(5, 10)
     name : string;

    @Field(type => Boolean)
    @IsBoolean()
     isHeros : boolean;
    
     @Field(type => String)
     @IsString()
     @Length(5, 10)
     genre : string;

    @Field(type => String)
    @IsString()
    @Length(5, 10)
     heroName : string;
}