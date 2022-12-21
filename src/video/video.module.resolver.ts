import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class VideoResolver {
    
    // Query를 리턴해야 하는것이 함수여야 한다. 
    // 기본형은 아래와 같음
    // @Query(()=> Boolean) or @Query(returns => Boolean)

    @Query (returns => Boolean)
    isThisVideo() : Boolean {
        return true;
    }
}