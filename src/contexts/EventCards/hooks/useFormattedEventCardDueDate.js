import { useMemo } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const useFormattedEventCardDueDate = (dueDate) => {
  const date = useMemo(
    () => format(new Date(dueDate), "dd 'de' MMMM", { locale: ptBR }),
    [dueDate]
  );

  const time = useMemo(
    () => format(new Date(dueDate), "H:mm'h'", { locale: ptBR }),
    [dueDate]
  );

  return {
    date,
    time,
  };
};

export default useFormattedEventCardDueDate;
