import React, { ComponentType } from "react";

const CustomProvider = (Story: ComponentType) => <Story />;

export interface ThemeCustomProviderProps {
  children: React.ReactNode;
}

export default CustomProvider;
