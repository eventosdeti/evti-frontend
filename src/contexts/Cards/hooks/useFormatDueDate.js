import { useMemo } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const useFormatDueDate = dueDate => {
  const formated = useMemo(
    () => format(new Date(dueDate), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
    [dueDate]
  );
  return formated;
};

export default useFormatDueDate;
