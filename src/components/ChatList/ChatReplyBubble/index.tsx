import React from 'react';
import { getImgFromPublic } from 'utils/utils';
import * as S from './styled';
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
    <S.Wrap>
      {mine ? (
        <S.ReplyBubbleBox>
          <S.ReplyBubbleProfileBox>
            <S.ReplyProfileImgBox>
              <S.ProfileImg
                src={getImgFromPublic(reply.profileImage)}
                alt="*"
              />
            </S.ReplyProfileImgBox>
            <S.ReplyBubbleProfileName>
              <span>{reply.userName}</span>
            </S.ReplyBubbleProfileName>
          </S.ReplyBubbleProfileBox>
          <S.ReplyBubbleContent>
            <ContentPre>{reply.replyContent}</ContentPre>
          </S.ReplyBubbleContent>
        </S.ReplyBubbleBox>
      ) : (
        <S.YourReplyBubble>
          <S.ReplyBubbleProfileBox>
            <S.ReplyProfileImgBox>
              <S.ProfileImg
                src={getImgFromPublic(reply.profileImage)}
                alt="*"
              />
            </S.ReplyProfileImgBox>
            <S.ReplyBubbleProfileName>
              <span>{reply.userName}</span>
            </S.ReplyBubbleProfileName>
          </S.ReplyBubbleProfileBox>
          <S.ReplyBubbleContent>
            <ContentPre>{reply.replyContent}</ContentPre>
          </S.ReplyBubbleContent>
        </S.YourReplyBubble>
      )}
    </S.Wrap>
  );
}

export default ChatReplyBuble;
