import { VariantProps } from '@gluestack-ui/themed';

declare module '@gluestack-ui/themed' {
    interface IBoxProps {
        p?: number | string;
        px?: number | string;
        py?: number | string;
        pt?: number | string;
        pr?: number | string;
        pb?: number | string;
        pl?: number | string;
        // Add other props you need
    }
}