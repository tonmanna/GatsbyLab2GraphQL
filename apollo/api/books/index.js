exports.getBooks = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    title: 'Harry Potter and the Chamber of Secrets 4',
                    author: 'J.K. Rowling',
                },
                {
                    title: 'Jurassic Park',
                    author: 'Michael Crichton',
                },
            ]);
        }, 1000);
    });
};
