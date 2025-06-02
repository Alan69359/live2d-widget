import { LAppDelegate } from './lappdelegate';
window.addEventListener('load', () => {
    if (!LAppDelegate.getInstance().initialize()) {
        return;
    }
    LAppDelegate.getInstance().run();
}, { passive: true });
window.addEventListener('beforeunload', () => LAppDelegate.releaseInstance(), { passive: true });
