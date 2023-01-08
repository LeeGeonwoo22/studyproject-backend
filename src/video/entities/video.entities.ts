import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Video {
    @Field(() => String)
    name: string;
    @Field(() => Boolean)
    isHeros: boolean;

    @Field(type => String)
    genre : string;

    @Field(type => String)
    heroName : string;
}