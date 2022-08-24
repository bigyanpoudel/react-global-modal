import React from 'react'

import { IGlobalModalOpenProps } from '../ModalWrapper/WrapperGlobalComponent'

export class GlobalModal {
  _globalModalRef = null //reference variable

  /**
   * getting reference of bottom wrapper component
   */
  static setUpModal(ref: React.Ref<any>) {
    ;(this as any)._globalModalRef = ref
  }

  static push({ ...args }: IGlobalModalOpenProps) {
    if ((this as any)._globalModalRef) {
      ;((this as any)._globalModalRef as any).open({ ...args })
    }
  }

  static add({ ...props }, index: number) {
    if ((this as any)._globalModalRef) {
      ;((this as any)._globalModalRef as any).updateModalProps({ ...props }, index)
    }
  }

  static pop(index?: number) {
    if ((this as any)._globalModalRef) {
      ;((this as any)._globalModalRef as any).close(index)
    }
  }
}
