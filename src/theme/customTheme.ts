import { Tuple, DefaultMantineColor } from '@mantine/core';

type CustomColors = 'brand' | DefaultMantineColor

declare module '@mantine/core/'{
    export interface MantineThemeColorsOverride  {
        colors: Record<CustomColors, Tuple<string, 10>>
    }
}


