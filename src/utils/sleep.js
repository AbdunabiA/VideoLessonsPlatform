export const sleep = (duration) => {
    const start = new Date().getTime()
    let end = start

    while (end<start+duration){
        end = new Date().getTime()
    }
}