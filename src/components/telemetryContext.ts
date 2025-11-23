import { createContext } from 'react';
import { reactPlugin } from '../services/telemetryService.js';

const TelemetryContext = createContext(reactPlugin);

export const TelemetryProvider = TelemetryContext.Provider;
export const TelemetryConsumer = TelemetryContext.Consumer;
export default TelemetryContext;
