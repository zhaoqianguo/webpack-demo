import { type TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { RootState, RootDispatch } from '@/store';

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useRootDispatch: () => RootDispatch = useDispatch;
