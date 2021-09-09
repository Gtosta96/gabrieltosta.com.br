import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: string) {
  return format(new Date(date), "dd 'de' LLLL 'de' yyyy", { locale: ptBR });
}
