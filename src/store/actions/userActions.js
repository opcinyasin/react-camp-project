export const SIGN_IN = "SIGN_IN";
export const SING_OUT= "SIGN_OUT"

export function signIn() {
    return {
        type: SIGN_IN,
        payload: true
    }
}

export function signOut() {
    return {
        type: SING_OUT,
        payload: false
    }
}
