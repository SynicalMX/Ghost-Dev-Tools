const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

export function makeID(length: number) {
    let res = ''
    for (let i = 0; i < length; i++) {
        const char = Math.random() * (characters.length - 0) + 0;
        res += char
    }
    return res
}

export function makeTemplate(method, ...args) {
    let template = {
        method: method,
        params: [

        ]
    }
    args.forEach((arg: any) => {
        template.params 
    })
    return template
}