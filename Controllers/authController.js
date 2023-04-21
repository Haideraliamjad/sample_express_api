class authController {
    constructor() {
        console.log("This is Constructor");
    }
    static getName(req,res){
        return res.json({
            'message' : "This is getName"
        });
    }
}
module.exports = authController;
