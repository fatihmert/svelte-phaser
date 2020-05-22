import { createPhaserEventDispatcher } from '../util'

export function applyGameObjectEventDispatchers(instance, dispatch) {
  const listeners = [
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'drag',
      (pointer, dragX, dragY) => ({
        pointer,
        dragX,
        dragY,
      })
    ),
    createPhaserEventDispatcher(instance, dispatch, 'dragend', (pointer) => ({
      pointer,
    })),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'dragenter',
      (pointer, target) => ({
        pointer,
        target,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'dragleave',
      (pointer, target) => ({
        pointer,
        target,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'dragover',
      (pointer, target) => ({
        pointer,
        target,
      })
    ),
    createPhaserEventDispatcher(instance, dispatch, 'dragstart', (pointer) => ({
      pointer,
    })),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'drop',
      (pointer, target) => ({
        pointer,

        target,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'pointerdown',
      (pointer, localX, localY, event) => ({
        pointer,
        localX,
        localY,
        event,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'pointermove',
      (pointer, localX, localY, event) => ({
        pointer,
        localX,
        localY,
        event,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'pointerout',
      (pointer, event) => ({
        pointer,
        event,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'pointerover',
      (pointer, localX, localY, event) => ({
        pointer,
        localX,
        localY,
        event,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'pointerup',
      (pointer, localX, localY, event) => ({
        pointer,
        localX,
        localY,
        event,
      })
    ),
    createPhaserEventDispatcher(
      instance,
      dispatch,
      'pointerwheel',
      (pointer, deltaX, deltaY, deltaZ, event) => ({
        pointer,
        deltaX,
        deltaY,
        deltaZ,
        event,
      })
    ),
  ]

  // is this necessary? do gameobjects clean this up when they destroy?
  return () => listeners.forEach((listener) => listener())
}
