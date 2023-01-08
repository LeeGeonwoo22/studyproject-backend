import { ArgsType, Field} from "@nestjs/graphql";

@ArgsType()
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