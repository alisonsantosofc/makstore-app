import {
  HiInformationCircle,
  HiBadgeCheck,
  HiExclamation,
  HiEmojiSad,
} from 'react-icons/hi';

import { Container } from './styles';

interface ToastProps {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export function Toast({ title, message, type }: ToastProps) {
  function setIcon() {
    switch (type) {
      case 'info':
        return <HiInformationCircle color="#3498db" />;
        break;
      case 'success':
        return <HiBadgeCheck color="#07bc0c" />;
        break;
      case 'warning':
        return <HiExclamation color="#f1c40f" />;
        break;
      case 'error':
        return <HiEmojiSad color="#e74c3c" />;
        break;
      default:
        return <HiExclamation color="#f1c40f" />;
        break;
    }
  }

  return (
    <Container>
      {setIcon()}

      <div className="message-content">
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </Container>
  );
}
