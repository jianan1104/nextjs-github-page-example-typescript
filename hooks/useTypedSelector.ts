import { RootState } from '../state';
import { useSelector, TypedUseSelectorHook } from "react-redux";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;