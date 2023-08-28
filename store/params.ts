import { shallow } from 'zustand/shallow';
import {createWithEqualityFn} from "zustand/traditional";

type Props = {
    open:boolean,
    openSidebar: () => any
}

export const useParamsOptions = createWithEqualityFn<Props>()(set => ({
    open: false,
    openSidebar: () => {
        set((state) => ({open: !state.open}))
    }
}), shallow)