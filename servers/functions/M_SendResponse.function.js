

// Error handling
exports.sendError = (err, res) => {

    res.status(501).json({
        "status":501,
        "message":typeof err == 'object' ? err.message : err
    });
};

// sendResponse handling
exports.sendResponse = (res,code,data,message) => {

    if(data!=null)
        res.status(200).json({
            "status":200,
            "data":data,
            "message":message,
        });
    else
        res.status(code).json({
            "status":code,
            "message":message,
        });
};
