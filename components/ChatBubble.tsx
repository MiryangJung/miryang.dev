import { ChatBubbleContainer } from './ChatBubble.style'

const ChatBubble = ({ content, color }: { content: string; color: string }) => {
  return <ChatBubbleContainer color={color}>{content}</ChatBubbleContainer>
}

export default ChatBubble
