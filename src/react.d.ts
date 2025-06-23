import type { AriaAttributes } from "react";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Add React 19's new properties
    popovertarget?: string;
    popovertargetaction?: string;
  }
}