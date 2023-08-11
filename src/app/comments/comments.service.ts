import { getChannelDetails, getVideoDetail } from "./function/comments.funs";

export default class CommentsService {
  async getVideoDetail(videoId: string) {
    return getVideoDetail(videoId);
  }
  async getChannelDetails(channelId: string) {
    return getChannelDetails(channelId);
  }
}
