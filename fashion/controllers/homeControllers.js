const getMainHome = async (req, res) => {
    return res.render('main-home');
}

module.exports = {
    getMainHome: getMainHome,
};


