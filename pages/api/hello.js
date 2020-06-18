

export default(req,res)=>{

    res.status(200).json({h:req.query.code})
}