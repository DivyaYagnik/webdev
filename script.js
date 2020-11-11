const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(
        () => {reject()}
        ,1000)

    })
}


