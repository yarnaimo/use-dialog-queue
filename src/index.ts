import {
  AlertOptions,
  ConfirmOptions,
  DialogProvider,
  PromptOptions,
  useDialog,
} from 'muibox'
import { useMemo } from 'react'

export const DialogQueueProvider = DialogProvider

export const useDialogQueue = () => {
  const dialog = useDialog()

  return useMemo(
    () => ({
      alert: (options: AlertOptions) => dialog.alert(options),
      confirm: (options: ConfirmOptions) =>
        dialog
          .confirm(options)
          .then(() => true)
          .catch(() => false),
      prompt: (options: PromptOptions) =>
        dialog
          .prompt(options)
          .then((value) => value)
          .catch(() => undefined),
    }),
    [dialog],
  )
}
