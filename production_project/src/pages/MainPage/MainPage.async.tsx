import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
      /* Не забыть откатить, сделал импровизированную задержку при переходах */
      //@ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500
      );
    }
  )
);