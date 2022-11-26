const User = require ('../../models/user')

module.exports = {
    
    async find (){
        const users = await User.find({}); 
        console.log(users);
        return users
    },
    
    async save (data){
        const saved = await new User(data).save();
        return saved
    },

    async update (id){
        const userUpdated = await new User().updateOne({ _id: id }); 
        return userUpdated
    },

    async findById (id){
        const user = await User.findById(id);
        return user
    },

    async delete (id){
        const userdeleted = await User.deleteOne({_id: id}); 
        return userdeleted
        
    },

    async findOne (data, fullFilds = false){
       
        if (fullFilds){
            const user = await User.findOne(data).select("username email password cep address number district city UF ");
            return user
        }else{
            const user = await User.findOne(data);
            return user
        }
    },

}