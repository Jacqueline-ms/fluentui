import {
  IDialogContentStyleProps,
  IDialogContentStyles,
  IDialogFooterStyleProps,
  IDialogFooterStyles,
} from 'office-ui-fabric-react/lib/Dialog';
import { IExtendedSemanticColors } from '../IExtendedSemanticColors';
import { FontSizes } from '../AzureType';
import { BaseColors } from '../AzureColors';

export const DialogContentStyles = (props: IDialogContentStyleProps): Partial<IDialogContentStyles> => {
  const { theme, isLargeHeader } = props;
  const semanticColors = theme.semanticColors as IExtendedSemanticColors;

  return {
    content: {
      color: semanticColors.bodyText,
      fontSize: FontSizes.size13,
    },
    title: [
      {
        fontSize: FontSizes.size18,
      },
      isLargeHeader && {
        color: semanticColors.primaryButtonText,
      },
      !isLargeHeader && {
        color: semanticColors.bodyText,
      },
    ],
    topButton: {
      selectors: {
        '.ms-Dialog-button': {
          color: semanticColors.bodyText,
        },
        '.ms-Dialog-button:hover': {
          backgroundColor: BaseColors.RED_E00B1C, // always this color regardless of theme.
          color: BaseColors.WHITE,
        },
        '.ms-Dialog-button:active': {
          backgroundColor: BaseColors.RED_E00B1C, // always this color regardless of theme.
          color: BaseColors.WHITE,
        },
      },
    },
    innerContent: {
      color: semanticColors.bodyText,
      fontSize: FontSizes.size12,
    },
    subText: {
      color: semanticColors.bodyText,
      fontSize: FontSizes.size12,
    },
  };
};

export const DialogFooterStyles = (props: IDialogFooterStyleProps): Partial<IDialogFooterStyles> => {
  return {
    actions: {
      margin: '16px 0 0',
    },
  };
};
