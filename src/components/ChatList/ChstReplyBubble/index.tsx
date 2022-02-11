import React from 'react';
import img from 'assets/img/img.jpg';
import {
  ProfileImg,
  ReplyBubbleBox,
  ReplyBubbleContent,
  ReplyBubbleProfileBox,
  ReplyBubbleProfileName,
  ReplyProfileImgBox,
  YourReplyBubble,
} from './styled';
import { ContentPre } from '../ChatBubble/styled';

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
        <YourReplyBubble>
          <ReplyBubbleProfileBox>
            <ReplyProfileImgBox>
              <ProfileImg src={img} alt="*" />
            </ReplyProfileImgBox>
            <ReplyBubbleProfileName>
              <span>{reply.userName}</span>
            </ReplyBubbleProfileName>
          </ReplyBubbleProfileBox>
          <ReplyBubbleContent>
            <ContentPre>{reply.replyContent}</ContentPre>
          </ReplyBubbleContent>
        </YourReplyBubble>
      ) : (
        <ReplyBubbleBox>
          <ReplyBubbleProfileBox>
            <ReplyProfileImgBox>
              <ProfileImg src={img} alt="*" />
            </ReplyProfileImgBox>
            <ReplyBubbleProfileName>
              <span>{reply.userName}</span>
            </ReplyBubbleProfileName>
          </ReplyBubbleProfileBox>
          <ReplyBubbleContent>
            <ContentPre>{reply.replyContent}</ContentPre>
          </ReplyBubbleContent>
        </ReplyBubbleBox>
      )}
    </div>
  );
}

export default ChatReplyBuble;
