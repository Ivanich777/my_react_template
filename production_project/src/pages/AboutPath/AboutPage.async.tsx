import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
      /* Не забыть откатить, сделал импровизированную задержку при переходах */
      //@ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500
      );
    }
  )
);