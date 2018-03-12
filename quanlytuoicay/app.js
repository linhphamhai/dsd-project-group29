const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});

var newStaff = {
    staff_id: 1,
    staff_code: 'dasd',
    staff_name: 'asdas',
    staff_dob: '1996-10-09',
    staff_phone: '2051654651',
    staff_address: 'sdfghfjjgds',
    staff_role: '64564' 
}

var staffDao = require('./dao/StaffDao');
staffDao.updateStaff(newStaff, function(){
    console.log('hello');
})