import { useContext } from "react";

import Context from "./ToasterContext";

const useToasterContext = () => useContext(Context);

export default useToasterContext;
