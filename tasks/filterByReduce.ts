function filter<T, U>(arr: T[], cb: (value: T, index: number, arr: T[]) => U): T[]{
    return arr.reduce((acc: T[], value: T, index: number) => {
        const res = cb(value, index, arr)
        if (res){
            acc.push(value)
        }
        return acc
    }, [])

}
