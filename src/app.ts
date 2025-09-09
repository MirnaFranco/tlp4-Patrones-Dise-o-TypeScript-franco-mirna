import { runObserver } from "./Observer";
import { runAdapter } from "./Adapter/Index";
import { runSingleton } from "./Singleton";
import { runFactory } from "./Factory";


(
  async () => {
    await runObserver();
    await runAdapter();
    await runSingleton();
    await runFactory();
  }
)();