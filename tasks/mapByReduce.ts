function map<T, U>(arr: T[], cb: (value: T, index: number, arr: T[]) => U): U[]{
    return arr.reduce((acc: U[], value: T, index: number) => {
        const res = cb(value, index, arr)
        acc.push(res)
        return acc
    }, [])

}








