var pool = require('../config/db');

var StaffDao = {
    getAllStaff : function(callback){
        
    },
    
    updateStaff : function(staff, callback){
        var sql = "UPDATE staff SET staff_code = '" + staff.staff_code + "', staff_name = '" + staff.staff_name
            + "', staff_dob='" + staff.staff_dob + "', staff_phone='" + staff.staff_phone + "', staff_address = '"
             + staff.staff_address + "', staff_role = '" + staff.staff_role + "' WHERE staff_id = " + staff.staff_id ;
        try {
            pool.query(sql, function(err, result){
                if(err){
                    console.log(err);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = StaffDao;