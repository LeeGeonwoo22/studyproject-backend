import { Args, Query, Resolver } from "@nestjs/graphql";
import { Video } from "./entities/video.entities";

@Resolver(of => Video)
export class VideoResolver {
    @Query (returns => [Video])
    videos(@Args('Avengers') Avengers : boolean) : Video[]{
        console.log(Avengers)
        return [];
    }
}