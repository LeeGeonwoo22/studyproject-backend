import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createVideosDto {
    @Field(type => String)
     name : string;
    @Field(type => Boolean)
     isHeros : boolean;
    @Field(type => String)
     genre : string;
    @Field(type => String)
     heroName : string;
}