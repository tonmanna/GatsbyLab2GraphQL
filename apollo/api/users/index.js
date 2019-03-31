exports.getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: '11111111',
                    name: 'tonman',
                },
            ]);
        }, 1000);
    });
};
