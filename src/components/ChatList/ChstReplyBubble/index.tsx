import React from 'react';
import img from 'assets/img/img.jpg';
import { getImgFromPublic } from 'utils/utils';
import {
  ProfileImg,
  ReplyBubbleBox,
  ReplyBubbleContent,
  ReplyBubbleProfileBox,
  ReplyBubbleProfileName,
  ReplyProfileImgBox,
  YourReplyBubble,
} from './styled';
import { ContentPre } from '../ChatBubbleContent/styled';

interface ReplyBubleProps {
  userName: string;
  replyContent: string;
  profileImage: string;
}

interface ReplyBubleProp {
  reply: ReplyBubleProps;
  mine: boolean;
}

function ChatReplyBuble({ reply, mine }: ReplyBubleProp) {
  return (
    <div>
      {mine ? (
        <ReplyBubbleBox>
          <ReplyBubbleProfileBox>
            <ReplyProfileImgBox>
              <ProfileImg src={getImgFromPublic(reply.profileImage)} alt="*" />
            </ReplyProfileImgBox>
            <ReplyBubbleProfileName>
              <span>{reply.userName}</span>
            </ReplyBubbleProfileName>
          </ReplyBubbleProfileBox>
          <ReplyBubbleContent>
            <ContentPre>{reply.replyContent}</ContentPre>
          </ReplyBubbleContent>
        </ReplyBubbleBox>
      ) : (
        <YourReplyBubble>
          <ReplyBubbleProfileBox>
            <ReplyProfileImgBox>
              <ProfileImg src={getImgFromPublic(reply.profileImage)} alt="*" />
            </ReplyProfileImgBox>
            <ReplyBubbleProfileName>
              <span>{reply.userName}</span>
            </ReplyBubbleProfileName>
          </ReplyBubbleProfileBox>
          <ReplyBubbleContent>
            <ContentPre>{reply.replyContent}</ContentPre>
          </ReplyBubbleContent>
        </YourReplyBubble>
      )}
    </div>
  );
}

export default ChatReplyBuble;
