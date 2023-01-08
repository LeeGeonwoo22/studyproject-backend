import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createVideosDto} from "./dtos/create-videos.dto";
import { Video } from "./entities/video.entities";

@Resolver(of => Video)
export class VideoResolver {
    @Query (returns => [Video])
    videos(@Args('Avengers') Avengers : boolean) : Video[]{
        console.log(Avengers)
        return [];
    }
    @Mutation(returns => Boolean)
    createVideos(
        @Args('createVideoInput') createVideoInput : createVideosDto
        ) : boolean {
            console.log(createVideoInput);
            return true;
        }
    }
    // createVideos(@Args() createVideosDto : createVideosDto) : boolean {
    //     console.log(createVideosDto);
    //     return true;
    // }
