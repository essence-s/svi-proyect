const { create } = require("zustand");

const useTheme = create((set, get) => ({
    theme: 'default',
    status: false,
    toogleTheme: () => {
        if (get().theme == 'default') {
            set((state) => ({ theme: 'theme-dark' }))
        } else {
            set((state) => ({ theme: 'default' }))
        }
    }
}))

export default useTheme