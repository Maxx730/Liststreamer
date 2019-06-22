module.exports = {
    GenerateAccessCode: () => {
        var key = Math.random().toString(36).substring(2,10)
        return key;
    }
}