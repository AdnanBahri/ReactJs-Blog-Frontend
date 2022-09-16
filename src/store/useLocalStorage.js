export const useLocalStorage = () => {
    const getUserData = (key) => {
        let token = null
        try {
            token = window.localStorage.getItem(key)
        } catch (error) {
            console.log(error);
            token = ''
        }
        return token
    }

    const setUserData = (key,value) => {
        window.localStorage.setItem(key, value)
    }

    const removeData = (keys) => {
        const keyList = [...keys]
        keyList.map(key => window.localStorage.removeItem(key))
        window.localStorage.clear()
    }

    return {
        getUserData,
        setUserData,
        removeData,
    }

}