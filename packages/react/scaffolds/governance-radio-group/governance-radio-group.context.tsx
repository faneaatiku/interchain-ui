import * as React from "react";
import type { RadioGroupState } from "react-stately";

export const RadioContext = React.createContext<RadioGroupState | null>(null);
