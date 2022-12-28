import { Query, Resolver } from "@nestjs/graphql";
import { Video } from "./entities/video.entities";

@Resolver(of => Video)
export class VideoResolver {
    

    @Query (returns => Video)
    myVideo(){
        return true;
    }
}