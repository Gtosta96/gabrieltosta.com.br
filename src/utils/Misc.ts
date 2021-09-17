import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { PostItems } from './Content';

export function formatDate(post: PostItems) {
  return format(new Date(post.date), "dd 'de' LLLL 'de' yyyy", { locale: ptBR });
}

export function getSubtitle(post: PostItems, showReadTime?: boolean) {
  const date = formatDate(post);
  const readTime = `${Math.ceil(Number(post.readTime))} minutos de leitura`;

  if (!showReadTime) {
    return date;
  }

  return `${date} • ${readTime}`;
}
