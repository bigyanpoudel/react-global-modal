import React from 'react'

import { IGlobalModalOpenProps } from '../ModalWrapper/WrapperGlobalComponent'
/**
 * GlobalModal is a class that provides a global modal dialog.
 * It uses a reference to a modal component to control the modal's behavior.
 *
 * @class
 */
export class GlobalModal {
  _globalModalRef = null //reference variable

  /**
   * GlobalModal is a class that provides a global modal dialog.
   * It uses a reference to a modal component to control the modal's behavior.
   *
   * @class
   */
  static setUpModal(ref: React.Ref<any>) {
    ;(this as any)._globalModalRef = ref
  }

  /**
   * GlobalModal is a class that provides a global modal dialog.
   * It uses a reference to a modal component to control the modal's behavior.
   *
   * @class
   */
  static push({ ...args }: IGlobalModalOpenProps) {
    if ((this as any)._globalModalRef) {
      ;((this as any)._globalModalRef as any).open({ ...args })
    }
  }

  /**
   * Updates the properties of the modal at the specified index.
   *
   * @static
   * @param {object} props - The new properties to apply to the modal.
   * @param {number} modalIndex - The index of the modal to update.
   */
  static add({ props, modalIndex }: { props: Record<any, any>; modalIndex: number }) {
    if ((this as any)._globalModalRef) {
      ;((this as any)._globalModalRef as any).updateModalProps({ ...props }, modalIndex)
    }
  }
  /**
   * Closes the modal at the specified index.
   *
   * @static
   * @param {number} [index] - The index of the modal to close. If not specified, the last modal is closed.
   */
  static pop(index?: number) {
    if ((this as any)._globalModalRef) {
      ;((this as any)._globalModalRef as any).close(index)
    }
  }
  /**
   * Closes all modals.
   *
   * @static
   */
  static closeAll() {
    if ((this as any)._globalModalRef) {
      ;((this as any)._globalModalRef as any).closeAll()
    }
  }
}
